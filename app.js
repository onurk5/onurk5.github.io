"use strict";

const hourSpan = document.querySelector("#hour");
const minSpan = document.querySelector("#minutes");
const secSpan = document.querySelector("#seconds");
const amPMSpan = document.querySelector("#ampm");
const hourDot = document.querySelector("#dot-hour");
const minDot = document.querySelector("#dot-minute");
const secDot = document.querySelector("#dot-second");
const hourContainer = hourDot.parentElement;
const minContainer = minDot.parentElement;
const secContainer = secDot.parentElement;

setInterval(() => {
	const now = new Date();
	const time = {
		hour: now.getHours(),
		minute: now.getMinutes(),
		sec: now.getSeconds(),
	};
	hourSpan.textContent = padWithZeroes(time.hour, 2);
	minSpan.textContent = padWithZeroes(time.minute, 2);
	secSpan.textContent = padWithZeroes(time.sec, 2);
	amPMSpan.textContent = time.hour < 12 ? "AM" : "PM";
	hourContainer.style.setProperty("--p", `${(time.hour / 24) * 100}`);
	minContainer.style.setProperty("--p", `${(time.minute / 60) * 100}`);
	secContainer.style.setProperty("--p", `${(time.sec / 60) * 100}`);
	hourDot.style.transform = `rotate(${
		(time.hour * 360) / 24 + time.hour * 360
	}deg)`;
	minDot.style.transform = `rotate(${
		(time.minute * 360) / 60 + time.hour * 360
	}deg)`;
	secDot.style.transform = `rotate(${
		(time.sec * 360) / 60 + time.minute * 360
	}deg)`;
}, 1000);
function padWithZeroes(number, length) {
	const zeroes = Array(length - number.toString().length)
		.fill("0")
		.join("");
	return zeroes + number.toString(); // concatenating zeroes to given number
}

