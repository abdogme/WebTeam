// دالة عرض التاريخ في الصفحة الرئيسية
window.onload = function () {
	const dateElement = document.getElementById("date-display");
	if (dateElement) {
		const today = new Date();
		// تنسيق التاريخ بالعربي
		const options = {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		};
		dateElement.innerText =
			"تاريخ اليوم: " + today.toLocaleDateString("ar-EG", options);

		// تنسيق الستايل بالجافاسكريبت
		dateElement.style.fontSize = "1.1rem";
		dateElement.style.margin = "20px 0";
		dateElement.style.color = "#e0aaff"; // لون بنفسجي فاتح
		dateElement.style.fontWeight = "bold";
	}
};

// دالة التحقق من الفورم (Form Validation)
function validateForm() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;

	if (name === "" || email === "") {
		alert("⚠️ يرجى ملء جميع الحقول المطلوبة!");
		return false; // منع الإرسال
	} else {
		alert("✅ شكراً لك يا " + name + "! تم استلام رسالتك بنجاح.");
		return true; // السماح بالإرسال (محاكاة)
	}
}
