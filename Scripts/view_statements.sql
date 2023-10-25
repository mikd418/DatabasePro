CREATE VIEW current_device_proxy AS
SELECT DID, DLocation, DIP, DPISP
FROM Device;

--CREATE VIEW meeting_information AS
--SELECT Organization.OID, CID, CName, CAttendance, CStartDate, CEndDate, conference.HName, HState, HCity, HZip, HAddress
--FROM Conference
--JOIN Hotel ON Conference.HName = Hotel.HName
--JOIN Organization ON Conference.OID = Organization.OID;
