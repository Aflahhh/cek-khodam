function checkZodiac() {
  const name = document.getElementById("nameInput").value;
  if (name === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }
  const zodiacSigns = ["Prenjak Alang Alang", "cindil albino", "gudel mangkak", "pantat kingkong", "puncak rantai makanan", "memet"];
  const sum = name.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const zodiacIndex = sum % 12;
  const zodiac = zodiacSigns[zodiacIndex];

  const zodiacImage = document.getElementById("zodiacImage");
  const imageExtensions = ["jpg", "png", "jpeg", "gif"];

  let imageFound = false;
  for (const ext of imageExtensions) {
    const imagePath = `img/${zodiac.toLowerCase()}.${ext}`;
    const img = new Image();
    img.onload = function () {
      if (!imageFound) {
        zodiacImage.src = imagePath;
        zodiacImage.style.display = "block";
        imageFound = true;
      }
    };
    img.onerror = function () {
      if (ext === imageExtensions[imageExtensions.length - 1] && !imageFound) {
        zodiacImage.style.display = "none";
      }
    };
    img.src = imagePath;
  }

  document.getElementById("result").innerText = `Zodiak Anda adalah: ${zodiac}`;
}

function refreshPage() {
  document.getElementById("nameInput").value = "";
  document.getElementById("result").innerText = "";
  const zodiacImage = document.getElementById("zodiacImage");
  zodiacImage.style.display = "none";
  zodiacImage.src = "";
}
