CREATE TABLE DEVICE
	(
	  DLocation CHARACTER VARYING(255) NOT NULL,
	  DIP CHARACTER VARYING(255) NOT NULL,
	  DCDistance INT NOT NULL,
	  DPDistance INT NOT NULL,
	  DCISP CHARACTER VARYING(255) NOT NULL,
	  DPISP CHARACTER VARYING(255) NOT NULL,
	  DSISP CHARACTER VARYING(255) NOT NULL,
	  OID SERIAL PRIMARY KEY NOT NULL
	  --PRIMARY KEY (OID)
	);
	ALTER SEQUENCE DEVICE_DID_seq RESTART WITH 1;

	--CREATE TABLE HOTEL
	--(
	--HMaxMeetSize CHARACTER VARYING(255) NOT NULL,
	--HName CHARACTER VARYING(255) PRIMARY KEY NOT NULL,
	--HState CHARACTER VARYING(50) NOT NULL,
	--HZip INT NOT NULL,
	--HAddress CHARACTER VARYING(255) NOT NULL,
	--HContactPhone CHAR(10) NOT NULL,
	--HPhone CHAR(10) NOT NULL,
	--HNumRooms INT NOT NULL,
	--HCity VARCHAR(255) NOT NULL
	--PRIMARY KEY (HName)
	--);
	
	--CREATE TABLE CONFERENCE
	--(
	  --CName CHARACTER VARYING(255) NOT NULL,
	  --CID SERIAL PRIMARY KEY NOT NULL,
	  --CStartDate DATE NOT NULL,
	  --CEndDate DATE NOT NULL,
	  --CCity CHARACTER VARYING(255) NOT NULL,
	  --CFee INT NOT NULL,
	  --CAttendance INT NOT NULL,
	  --CBudget FLOAT NOT NULL,
	  --HName CHARACTER VARYING(255) NOT NULL,
	  --PRIMARY KEY (CID),
	  --OID SERIAL,
	  --CONSTRAINT fk_org 
		--FOREIGN KEY(OID)
		--REFERENCES ORGANIZATION(OID),
		
	  --CONSTRAINT fk_hname_conf
		--FOREIGN KEY (HName) 
		--REFERENCES HOTEL(HName)
		
	--);
	--ALTER SEQUENCE CONFERENCE_OID_seq RESTART WITH 1;
	--ALTER SEQUENCE CONFERENCE_CID_seq RESTART WITH 1;
	
	--CREATE TABLE ATTENDEE
	--(
	  --AName CHARACTER VARYING(255) NOT NULL,
	  --APhone CHAR(255) NOT NULL,
	  --ADiscount INT NOT NULL,
	  --AID SERIAL NOT NULL,
	  --AEmail CHARACTER VARYING(255) NOT NULL,
	  --AFeePaid smallint NOT NULL,
	  --HName CHARACTER VARYING(255) NOT NULL,
	  --PRIMARY KEY (AID),
	  --CID SERIAL,
	  --HName BIGINT UNSIGNED NOT NULL,
	  --CONSTRAINT fk_cid_att
		--FOREIGN KEY (CID) 
		--REFERENCES CONFERENCE(CID)
		--ON DELETE CASCADE,
	
	  --CONSTRAINT fk_hname_att
		--FOREIGN KEY (HName) 
		--REFERENCES HOTEL(HName)
	
	--);
	--ALTER SEQUENCE ATTENDEE_AID_seq RESTART WITH 1;
	--ALTER SEQUENCE ATTENDEE_CID_seq RESTART WITH 1;
