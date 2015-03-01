DROP TABLE objects;

CREATE TABLE objects (
  id smallserial,
  radial_distance_ec integer,
  polar_angle_ec numeric(3, 2),
  azimuth_angle_ec numeric(3, 2)
);

INSERT INTO objects VALUES (
  DEFAULT,
  298000,
  1.1,
  1.2
);

INSERT INTO objects VALUES (
  DEFAULT,
  298001,
  1.2,
  1.3
);

INSERT INTO objects VALUES (
  DEFAULT,
  298002,
  1.2,
  1.3
);
