DROP TABLE objects;

CREATE TABLE objects (
  id smallserial,
  code varchar(10),
  height integer
);

INSERT INTO objects VALUES (
  DEFAULT,
  'US_KH-11',
  298000
);

INSERT INTO objects VALUES (
  DEFAULT,
  'US_KH-11',
  348000
);

INSERT INTO objects VALUES (
  DEFAULT,
  'US_KH-11',
  398000
);
