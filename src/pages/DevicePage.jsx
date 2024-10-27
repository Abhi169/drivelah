import { useState } from "react";

const DevicePage = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: "Device 1", isBringing: false },
    { id: 2, name: "Device 2", isBringing: false },
    { id: 3, name: "Device 3", isBringing: false },
  ]);

  const handleToggle = (id) => {
    setDevices((prevDevices) =>
      prevDevices.map((device) =>
        device.id === id
          ? { ...device, isBringing: !device.isBringing }
          : device
      )
    );
  };

  return (
    <div>
      <h1>Device Management</h1>
      <p>
        Add details of the device, if any already installed on your car. If
        none, then continue to the next step.
      </p>
      <div className="devices">
        {devices.map((device) => (
          <div key={device.id} className={`device-info`}>
            <div className="left">
              <h2>{device.name}</h2>
              <p>Device type</p>
              <p>
                {device.name === "Device 3" ? "Drive mate Go" : "Primary GPS"}
              </p>
              <p>Serial number</p>
              <input
                type="text"
                name={`serial-${device.id}`}
                placeholder="Enter the serial number of the device"
              />
            </div>
            <div className="right">
              <p>Bringing your own device?</p>
              <label>
                <input
                  type="checkbox"
                  checked={device.isBringing}
                  onChange={() => handleToggle(device.id)}
                />
                Toggle
              </label>
              <p>
                {device.isBringing
                  ? "You are bringing your own device."
                  : "Leave it off if Drive mate is to provide the device."}
              </p>
              {device.isBringing && (
                <>
                  <p>Upload an image of the device</p>
                  <input
                    type="file"
                    name={`image-${device.id}`}
                    placeholder="Click to upload"
                  />
                </>
              )}
            </div>
          </div>
        ))}

        {/* Static Device 4 */}
        <div className="device-info">
          <div className="left">
            <h2>Device 4</h2>
            <p>Device type</p>
            <p>Lockbox</p>
            <p>Serial number</p>
            <input
              type="text"
              name="serial-4"
              placeholder="Enter the serial number of the device"
            />
          </div>
          <div className="right">
            <p>Upload an image of the device</p>
            <input type="file" name="image-4" placeholder="Click to upload" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevicePage;
