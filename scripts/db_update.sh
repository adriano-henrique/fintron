#!/bin/bash

if [ "$#" -ne 2 ]; then
  echo "Usage: $0 <database-name> <sql-file>"
  exit 1
fi

DATABASE_NAME=$1
SQL_FILE=$2

if [ ! -f "$SQL_FILE" ]; then
  echo "SQL file not found!"
  exit 1
fi

SQL_COMMANDS=$(<"$SQL_FILE")

turso db shell "$DATABASE_NAME" "$SQL_COMMANDS"