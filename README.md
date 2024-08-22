# School Management API

This is a simple Node.js API for managing school data. It allows users to add new schools and retrieve a list of schools sorted by proximity to a user-specified location.

## Table of Contents
- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [Add School](#add-school)
  - [List Schools](#list-schools)
- [Postman Collection](#postman-collection)

## Features

- **Add School**: Add a new school with name, address, latitude, and longitude.
- **List Schools**: Retrieve a list of schools sorted by proximity to a user-specified location.

## API Endpoints

### 1. Add School

- **Endpoint**: `/addSchool`
- **Method**: `POST`
- **Description**: Adds a new school to the database.

#### Request Body
The request should be in JSON format with the following fields:

| Field      | Type    | Description                                   |
|------------|---------|-----------------------------------------------|
| `name`     | String  | Name of the school.                           |
| `address`  | String  | Address of the school.                        |
| `latitude` | Float   | Geographical latitude of the school's location.|
| `longitude`| Float   | Geographical longitude of the school's location.|

#### Example Request
```json
{
  "name": "Sample School",
  "address": "123 Main St",
  "latitude": 40.7128,
  "longitude": -74.0060
}
