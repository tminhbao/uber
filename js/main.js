/**
 * @return: total of money of user
 */
function getTypeCar() {
  var uberX = document.getElementById("uberX").checked;
  var uberSUV = document.getElementById("uberSUV").checked;
  var uberBlack = document.getElementById("uberBlack").checked;
  if (!uberX && !uberSUV && !uberBlack) {
    alert("Vui lòng chọn loại xe");
  } else {
    if (uberX) {
      return "uberX";
    } else if (uberSUV) {
      return "uberSUV";
    } else {
      return "uberBlack";
    }
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

function printBill() {
  var soKM = parseFloat(document.getElementById("soKM").value);
  var thoiGianCho = parseFloat(document.getElementById("thoiGianCho").value);
  var modalElement = document.getElementById("modalBodyContent");
  var typeCar = getTypeCar();
  switch (typeCar) {
    case "uberX":
      if (soKM <= 1) {
        thanhTien = soKM * 8000 + thoiGianCho * 2000;
        modalElement.innerHTML = `
        <tr>
            <td>uberX</td>
            <td>${soKM} km</td>
            <td>${8000}</td>
            <td>${soKM * 8000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 2000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 1 && soKM <= 20) {
        thanhTien = 8000 + (soKM - 1) * 12000 + thoiGianCho * 2000;
        modalElement.innerHTML = `
        <tr>
            <td>uberX</td>
            <td>1 km</td>
            <td>8000</td>
            <td>8000</td>
        </tr>
        <tr>
            <td>uberX</td>
            <td>${soKM - 1} km</td>
            <td>12000</td>
            <td>${(soKM - 1) * 12000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 2000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 20) {
        thanhTien =
          8000 + 20 * 12000 + (soKM - 21) * 10000 + thoiGianCho * 2000;
        modalElement.innerHTML = `
        <tr>
            <td>uberX</td>
            <td>1 km</td>
            <td>8000</td>
            <td>8000</td>
        </tr>
        <tr>
            <td>uberX</td>
            <td>19 km</td>
            <td>12000</td>
            <td>${19 * 12000}</td>
        </tr>
        <tr>
            <td>uberX</td>
            <td>${soKM - 20} km</td>
            <td>10000</td>
            <td>${(soKM - 20) * 10000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 2000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      }
      break;
    case "uberSUV":
      if (soKM <= 1) {
        thanhTien = soKM * 9000 + thoiGianCho * 3000;
        modalElement.innerHTML = `
        <tr>
            <td>uberSUV</td>
            <td>${soKM} km</td>
            <td>8000</td>
            <td>${soKM * 9000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 3000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 1 && soKM <= 20) {
        thanhTien = 9000 + (soKM - 1) * 14000 + thoiGianCho * 3000;
        modalElement.innerHTML = `
        <tr>
            <td>uberSUV</td>
            <td>1 km</td>
            <td>9000</td>
            <td>9000</td>
        </tr>
        <tr>
            <td>uberSUV</td>
            <td>${soKM - 1} km</td>
            <td>12000</td>
            <td>${(soKM - 1) * 14000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 3000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 20) {
        thanhTien =
          9000 + 20 * 14000 + (soKM - 21) * 10000 + thoiGianCho * 3000;
        modalElement.innerHTML = `
          <tr>
              <td>uberSUV</td>
              <td>1 km</td>
              <td>9000</td>
              <td>9000</td>
          </tr>
          <tr>
              <td>uberSUV</td>
              <td>19 km</td>
              <td>14000</td>
              <td>${19 * 14000}</td>
          </tr>
          <tr>
              <td>uberSUV</td>
              <td>${soKM - 20} km</td>
              <td>10000</td>
              <td>${(soKM - 20) * 10000}</td>
          </tr>
          <tr>
              <td>Thời gian chờ</td>
              <td>${thoiGianCho} phút</td>
              <td>2000</td>
              <td>${thoiGianCho * 3000}</td>
          </tr>
          <tr>
              <td colspan="3">Total</td>
              <td>${thanhTien}</td>
          </tr>
          `;
      }
      break;
    case "uberBlack":
      if (soKM <= 1) {
        thanhTien = soKM * 10000 + thoiGianCho * 4000;
        modalElement.innerHTML = `
        <tr>
            <td>uberBlack</td>
            <td>${soKM} km</td>
            <td>8000</td>
            <td>${soKM * 10000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 4000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 1 && soKM <= 20) {
        thanhTien = 10000 + (soKM - 1) * 16000 + thoiGianCho * 4000;
        modalElement.innerHTML = `
        <tr>
            <td>uberBlack</td>
            <td>1 km</td>
            <td>10000</td>
            <td>10000</td>
        </tr>
        <tr>
            <td>uberBlack</td>
            <td>${soKM - 1} km</td>
            <td>12000</td>
            <td>${(soKM - 1) * 16000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 4000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      } else if (soKM > 20) {
        thanhTien =
          10000 + 20 * 16000 + (soKM - 21) * 14000 + thoiGianCho * 4000;
        modalElement.innerHTML = `
        <tr>
            <td>uberBlack</td>
            <td>1 km</td>
            <td>10000</td>
            <td>10000</td>
        </tr>
        <tr>
            <td>uberBlack</td>
            <td>19 km</td>
            <td>12000</td>
            <td>${19 * 16000}</td>
        </tr>
        <tr>
            <td>uberBlack</td>
            <td>${soKM - 20} km</td>
            <td>10000</td>
            <td>${(soKM - 20) * 14000}</td>
        </tr>
        <tr>
            <td>Thời gian chờ</td>
            <td>${thoiGianCho} phút</td>
            <td>2000</td>
            <td>${thoiGianCho * 4000}</td>
        </tr>
        <tr>
            <td colspan="3">Total</td>
            <td>${thanhTien}</td>
        </tr>
        `;
      }
      break;
  }
}
