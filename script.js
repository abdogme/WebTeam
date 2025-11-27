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

		dateElement.style.fontSize = "1.1rem";
		dateElement.style.margin = "20px 0";
		dateElement.style.color = "#e0aaff"; // لون بنفسجي فاتح
		dateElement.style.fontWeight = "bold";
	}
};

function validateForm() {
	const name = document.getElementById("name").value;
	const email = document.getElementById("email").value;

	if (name === "" || email === "") {
		alert(" يرجى ملء جميع الحقول المطلوبة!");
		return false; // منع الإرسال
	} else {
		alert(" شكراً لك يا " + name + "! تم استلام رسالتك بنجاح.");
		return true; // السماح بالإرسال (محاكاة)
	}
}

// // --- كتابة التلقائية ---

// const text = "منصتك الأولى لتعلم المهارات الحديثة بأسلوب مبسط وعملي.";

// const typingElement = document.querySelector(".typewriter");

// let charIndex = 0;

// function typeWriter() {
// 	if (charIndex < text.length) {
// 		typingElement.textContent += text.charAt(charIndex);
// 		charIndex++;
// 		setTimeout(typeWriter, 50);
// 	}
// }

// document.addEventListener("DOMContentLoaded", typeWriter);
const text = "منصتك الأولى لتعلم المهارات الحديثة بأسلوب مبسط وعملي.";
const typingElement = document.querySelector(".typewriter");

let charIndex = 0;
let isDeleting = false;

function typeLoop() {
	if (!isDeleting && charIndex <= text.length) {
		typingElement.textContent = text.substring(0, charIndex);
		charIndex++;

		if (charIndex > text.length) {
			isDeleting = true;
			setTimeout(typeLoop, 5000);
			return;
		}
		setTimeout(typeLoop, 50);
	} else if (isDeleting && charIndex >= 0) {
		typingElement.textContent = text.substring(0, charIndex);
		charIndex--;

		if (charIndex < 0) {
			isDeleting = false;
			charIndex = 0;
			setTimeout(typeLoop, 500);
			return;
		}
		setTimeout(typeLoop, 20);
	}
}

document.addEventListener("DOMContentLoaded", typeLoop);
