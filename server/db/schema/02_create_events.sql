DROP TABLE IF EXISTS events CASCADE;
-- CREATE URLS
CREATE TABLE events (
  id SERIAL PRIMARY KEY,
  user_id integer REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  title VARCHAR(255) NOT NULL,
  summary VARCHAR(255) NOT NULL,
  long_url character varying(255) NOT NULL,  
  favorite boolean NOT NULL DEFAULT false
);

    
