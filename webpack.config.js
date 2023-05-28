const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const FileManagerPlugin = require("filemanager-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const Autoprefixer = require("autoprefixer");

const isDev = process.env.NODE_ENV === "development";
const target = isDev ? "web" : "browserslist";
// режим
const mode = isDev ? "development" : "production";

const babelUseValue = (preset) => {
	const useValue = {
		loader: "babel-loader",
		options: {
			presets: ["@babel/preset-env"],
		},
	};
	if (preset) useValue.options.presets.push(preset);
	return useValue;
};

function Mimimiser() {
	return mode === "production"
		? [
				new CssMinimizerPlugin(),
				new TerserPlugin({
					test: /\.js(\?.*)?$/i,
				}),
		  ]
		: [];
}

module.exports = {
	target,
	mode,
	entry: { index: ["@babel/polyfill", path.resolve(__dirname, "src", "index.js")] },
	output: {
		filename: "[name].[contenthash].js",
		path: path.resolve(__dirname, "dist"),
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(css|sass|scss)$/i,
				use: [
					mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									require("postcss-preset-env"),
									// Autoprefixer({
									// 	browsers: ["ie >= 9", "last 4 version"],
									// }),
								],
							},
						},
					},
					"sass-loader",
				],
				generator: {
					filename: "[name].[contenthash].css",
				},
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
				use: [
					{
						loader: "image-webpack-loader",
						options: {
							mozjpeg: {
								progressive: true,
							},
							// optipng.enabled: false will disable optipng
							optipng: {
								enabled: false,
							},
							pngquant: {
								quality: [0.65, 0.9],
								speed: 4,
							},
							gifsicle: {
								interlaced: false,
							},
							// the webp option will enable WEBP
							webp: {
								quality: 75,
							},
						},
					},
				],
				type: "asset/resource",
				generator: {
					filename: "img/[name][ext]",
				},
			},
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: babelUseValue(),
			},
			{
				test: /\.ts$/,
				exclude: /node_modules/,
				use: babelUseValue("@babel/preset-typescript"),
			},
			{
				test: /\.jsx$/,
				exclude: /node_modules/,
				use: babelUseValue("@babel/preset-react"),
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "fonts/[name][ext]",
				},
			},
		],
	},
	devServer: {
		port: 4000,
		open: true,
		watchFiles: path.join(__dirname, "src"),
		client: {
			logging: "warn",
		},
		hot: isDev,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src", "index.html"),
			minify: {
				collapseWhitespace: !isDev,
			},
		}),
		// new FileManagerPlugin({
		// 	events: {
		// 		onEnd: {
		// 			copy: [
		// 				{
		// 					source: path.resolve(__dirname, "src", "img"),
		// 					destination: path.resolve(__dirname, "dist/img"),
		// 				},
		// 				{
		// 					source: path.resolve(__dirname, "src", "icons"),
		// 					destination: path.resolve(__dirname, "dist", "icons"),
		// 				},
		// 			],
		// 		},
		// 	},
		// }),
		new MiniCssExtractPlugin({
			filename: "[name].[contenthash].css",
		}),
	],
	optimization: {
		minimizer: Mimimiser(),
		splitChunks: {
			chunks: "all",
		},
	},
	resolve: {
		extensions: [".js", ".json", ".wasm", ".jsx", ".tsx", ".ts"],
	},
};
