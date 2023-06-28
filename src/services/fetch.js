export default async function fetchFormData(url, formData) {
	try {
		let res = await fetch(url, {
			method: "POST",
			headers: {},			
			body: formData,			
		});

		if (!res.ok) throw new Error("Error");

		return res.text();
	} catch (err) {
		return err.message;
	}
}
