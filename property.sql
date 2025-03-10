CREATE TABLE "users" (
  "username" varchar PRIMARY KEY,
  "password" varchar NOT NULL,
  "first_name" varchar NOT NULL,
  "last_name" varchar NOT NULL,
  "email" varchar UNIQUE NOT NULL,
  "is_email_verified" bool NOT NULL DEFAULT false,
  "password_changed_at" timestamptz NOT NULL DEFAULT '0001-01-01',
  "created_at" timestamptz NOT NULL DEFAULT (now()),
  "updated_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "sessions" (
  "id" BIGSERIAL PRIMARY KEY,
  "username" varchar NOT NULL,
  "refresh_token" varchar NOT NULL,
  "user_agent" varchar NOT NULL,
  "client_ip" varchar NOT NULL,
  "is_blocked" boolean NOT NULL DEFAULT false,
  "expires_at" timestamptz NOT NULL,
  "created_at" timestamptz NOT NULL DEFAULT (now())
);

CREATE TABLE "properties" (
  "id" BIGSERIAL PRIMARY KEY,
  "prop_type" varchar NOT NULL,
  "move_in_date" varchar,
  "data_source_name" varchar NOT NULL,
  "price" INT NOT NULL,
  "year_built" INT NOT NULL,
  "permalink" varchar NOT NULL,
  "address" varchar NOT NULL,
  "beds" INT NOT NULL,
  "baths_full" INT NOT NULL,
  "baths" INT NOT NULL,
  "sqft" INT NOT NULL,
  "lot_sqft" varchar,
  "hoa_fee" INT NOT NULL,
  "hoa_historic_fee" varchar,
  "neighborhood" varchar NOT NULL,
  "raw_prop_type" varchar NOT NULL,
  "photo_count" INT NOT NULL,
  "status" varchar NOT NULL,
  "list_date" varchar NOT NULL,
  "last_update" varchar NOT NULL,
  "photo" varchar NOT NULL
);

CREATE TABLE "address" (
  "id" BIGSERIAL PRIMARY KEY,
  "city" varchar NOT NULL,
  "line" varchar NOT NULL,
  "postal_code" varchar NOT NULL,
  "address_validation_code" varchar NOT NULL,
  "state_code" varchar NOT NULL,
  "state" varchar NOT NULL,
  "county" varchar NOT NULL,
  "fips_code" varchar NOT NULL,
  "county_needed_for_uniq" varchar NOT NULL,
  "time_zone" varchar NOT NULL,
  "lat" INT NOT NULL,
  "neighborhood_name" varchar NOT NULL,
  "long" INT NOT NULL
);

CREATE TABLE "photos" (
  "id" BIGSERIAL PRIMARY KEY,
  "description" varchar NOT NULL,
  "href" varchar NOT NULL,
  "tags" varchar NOT NULL,
  "type" varchar NOT NULL
);

CREATE TABLE "tags" (
  "id" BIGSERIAL PRIMARY KEY,
  "label" varchar NOT NULL,
  "probability" varchar NOT NULL
);

CREATE TABLE "agents" (
  "id" BIGSERIAL PRIMARY KEY,
  "profile_name" VARCHAR NOT NULL,
  "advertiser_id" INT NOT NULL,
  "href" VARCHAR NOT NULL,
  "photo" varchar NOT NULL,
  "office_name" VARCHAR NOT NULL,
  "email" VARCHAR NOT NULL,
  "slogan" VARCHAR NOT NULL,
  "address" VARCHAR NOT NULL,
  "abbreviation" VARCHAR NOT NULL,
  "phone1" varchar NOT NULL,
  "face_centered_photo" Varchar NOT NULL
);

CREATE TABLE "phones" (
  "id" BIGSERIAL PRIMARY KEY,
  "number" VARCHAR NOT NULL,
  "type" VARCHAR NOT NULL,
  "primary" BOOLEAN NOT NULL
);

ALTER TABLE "sessions" ADD FOREIGN KEY ("username") REFERENCES "users" ("username");

ALTER TABLE "properties" ADD FOREIGN KEY ("address") REFERENCES "address" ("id");

ALTER TABLE "properties" ADD FOREIGN KEY ("photo") REFERENCES "photos" ("id");

ALTER TABLE "agents" ADD FOREIGN KEY ("photo") REFERENCES "photos" ("id");

ALTER TABLE "agents" ADD FOREIGN KEY ("profile_name") REFERENCES "users" ("username");

ALTER TABLE "agents" ADD FOREIGN KEY ("address") REFERENCES "address" ("id");

ALTER TABLE "agents" ADD FOREIGN KEY ("phone1") REFERENCES "phones" ("id");
