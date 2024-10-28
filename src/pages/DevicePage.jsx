import { useState } from "react";
import "./DevicePage.css";

const DevicePage = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Device 1", isBringing: false, showSerial: false },
    { id: 2, name: "Device 2", isBringing: false, showSerial: false },
    { id: 3, name: "Device 3", isBringing: false, showSerial: false },
    { id: 4, name: "Device 4", isBringing: true, showSerial: true }, // Added Device 4
  ]);

  const [uploadedImages, setUploadedImages] = useState({}); // To store images for each device

  const handleToggle = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, isBringing: !device.isBringing }
          : device
      )
    );
  };

  const handleToggleSerial = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, showSerial: !device.showSerial }
          : device
      )
    );
  };

  const handleImageUpload = (event, id) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImages((prev) => ({ ...prev, [id]: reader.result })); // Stores the base64 image data for each device
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDownloadImage = (id) => {
    const a = document.createElement("a");
    a.href = uploadedImages[id];
    a.download = `uploaded-image-${id}.png`; // Set the file name for download
    a.click();
  };

  return (
    <div className="device-container">
      <h1 className="device-title">Device Management</h1>
      <p className="device-p">
        Add details of the device, if any already installed on your car. If
        none, then continue to the next step.
      </p>
      <div className="devices">
        {devices.map((device) => {
          let deviceName = device.name;
          let deviceInput = "Primary GPS";

          if (device.id === 2) {
            deviceName = device.isBringing ? "Device 2" : "Device 1";
            deviceInput = device.isBringing ? "Secondary GPS" : "Primary GPS";
          } else if (device.id === 3) {
            deviceName = device.isBringing ? "Device 3" : "Device 2";
            deviceInput = device.isBringing ? "Drive mate Go" : "Secondary GPS";
          } else if (device.id === 4) {
            deviceName = "Device 4";
            deviceInput = "Lockbox";
          }

          return (
            <div key={device.id} className={`device-info`}>
              <div className="left">
                <h2 className="device-name">{deviceName}</h2>
                <p className="device-info-p">Device type</p>
                <input
                  type="text"
                  className="device-input"
                  readOnly
                  value={deviceInput}
                />
                {device.showSerial && (
                  <>
                    <p className="device-info-p">Serial number</p>
                    <input
                      type="text"
                      name={`serial-${device.id}`}
                      placeholder="Enter the serial number of the device"
                    />
                  </>
                )}
              </div>
              <div className="right">
                {device.id != 4 && (
                  <>
                    <p className="device-p">Bringing your own device?</p>
                    <button
                      className={`toggle-switch ${
                        device.isBringing ? "active" : ""
                      }`}
                      onClick={() => {
                        handleToggle(device.id);
                        handleToggleSerial(device.id);
                      }}
                    >
                      <span className="slider"></span>
                    </button>
                    <p className="device-note">
                      Toggle this on if you are bringing your own device. Leave
                      it off if Drive mate is providing the device.
                    </p>
                  </>
                )}
                {device.isBringing && (
                  <>
                    <p className="device-info-p">Upload an image of the device</p>
                    <div className="upload-section">
                      <label className="upload-box">
                        Click to upload
                        <input
                          type="file"
                          onChange={(e) => handleImageUpload(e, device.id)} // Pass device ID to the upload handler
                          style={{ display: "none" }}
                          accept="image/*" // Accept only image files
                        />
                      </label>
                      {uploadedImages[device.id] && ( // Check for uploaded images by device ID
                        <div className="preview-section">
                          <h2>Image Preview:</h2>
                          <img
                            src={uploadedImages[device.id]}
                            alt="Uploaded Preview"
                            style={{ width: "200px", marginTop: "10px" }}
                          />
                          <button
                            onClick={() => handleDownloadImage(device.id)} // Pass device ID to the download handler
                            className="download-btn"
                          >
                            Download Image
                          </button>
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DevicePage;
