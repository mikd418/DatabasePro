CREATE VIEW current_user_organization AS
SELECT OID, OName, OEmail, OCity, OPhone
FROM Organization;

CREATE VIEW meeting_information AS
SELECT Organization.OID, CID, CName, CAttendance, CStartDate, CEndDate, conference.HName, HState, HCity, HZip, HAddress
FROM Conference
JOIN Hotel ON Conference.HName = Hotel.HName
JOIN Organization ON Conference.OID = Organization.OID;
