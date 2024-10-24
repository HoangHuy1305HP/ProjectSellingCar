import React, { useRef, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import L from "leaflet";
import "leaflet-control-geocoder";

const MapComponent = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Hàm async trong useEffect
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://us-west1-foyer-work.cloudfunctions.net/manageUserSettings",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer YOUR_VALID_TOKEN`, // Thay YOUR_VALID_TOKEN bằng token hợp lệ
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              // Dữ liệu bạn muốn gửi
            }),
          }
        );

        if (!response.ok) {
          const errorText = await response.text();
          console.error(
            "Error response:",
            response.status,
            response.statusText,
            errorText
          );
          throw new Error(
            `Network response was not ok. Status: ${response.status}`
          );
        }

        const data = await response.json();
        console.log("Success:", data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();

    if (mapRef.current) {
      const map = mapRef.current;

      // Tạo instance của Geocoder
      const geocoder = L.Control.geocoder({
        defaultMarkGeocode: false,
      }).on("markgeocode", function (e) {
        const { center } = e.geocode;
        map.setView(center, map.getZoom());
      });

      // Thêm Geocoder vào bản đồ
      geocoder.addTo(map);

      // Lắng nghe sự kiện nhấp chuột trên bản đồ
      map.on("click", function (e) {
        const { lat, lng } = e.latlng;

        geocoder.reverse(
          [lat, lng],
          map.options.crs.scale(map.getZoom()),
          function (results) {
            const address =
              results && results.length > 0
                ? results[0].name
                : "Địa chỉ không tìm thấy";
            alert(`Vị trí: ${address}`);
          }
        );

        // Di chuyển bản đồ đến vị trí nhấp chuột
        map.setView(e.latlng, map.getZoom());
      });
    }
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      style={{ height: "461px", width: "500px" }}
      whenCreated={(mapInstance) => (mapRef.current = mapInstance)}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* <Marker position={[51.5, -0.09]}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
  );
};

export default MapComponent;
