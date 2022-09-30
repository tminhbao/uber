/**
 * @return: total of money of user
 */
function getTypeCar(typeCar) {
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberX").checked;
  if (!uberX && !uberSUV && !uberBlack) {
    alert("Vui lòng chọn loại xe");
  } else {
    if (uberX) {
      return "uberX";
    } else if (uberSUV) {
      return "uberSUV";
    }
    return uberBlack;
  }
}

function calcMoney() {
  var soKM = parseFloat(document.getElementById("soKM").value);
  var thoiGianCho = parseFloat(document.getElementById("thoiGianCho").value);
  if (!soKM) {
    alert("Vui lòng nhập vào số KM");
  } else if (!thoiGianCho) {
    alert("Vui lòng nhập thời gian chờ");
  } else {
    document.getElementById("divThanhTien").style.display = "block";
    var spanTien = document.getElementById("xuatTien");
    var typeCar = getTypeCar();
    switch (typeCar) {
      case "uberX":
        if (soKM <= 1) {
          thanhTien = soKM * 8000 + thoiGianCho * 2000;
        } else if (soKM > 1 && soKM <= 20) {
          thanhTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
        } else if (soKM > 20) {
          thanhTien =
            8000 + 20 * 12000 + (soKM - 21) * 10000 + thoiGianCho * 2000;
        }
        break;
      case "uberSUV":
        if (soKM <= 1) {
          thanhTien = soKM * 9000 + thoiGianCho * 3000;
        } else if (soKM > 1 && soKM <= 20) {
          thanhTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
        } else if (soKM > 20) {
          thanhTien =
            9000 + 20 * 14000 + (soKM - 21) * 10000 + thoiGianCho * 3000;
        }
        break;
      case "uberBlack":
        if (soKM <= 1) {
          thanhTien = soKM * 10000 + thoiGianCho * 4000;
        } else if (soKM > 1 && soKM <= 20) {
          thanhTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
        } else if (soKM > 20) {
          thanhTien =
            10000 + 20 * 16000 + (soKM - 21) * 14000 + thoiGianCho * 4000;
        }
        break;
    }
    spanTien.innerHTML = thanhTien;
  }
}
