-- Add migration script here
create table if not exists alarm_clock (
  time text not null
);