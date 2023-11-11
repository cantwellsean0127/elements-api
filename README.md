# Periodic Table of Elements API

## Overview
The Periodic Table of Elements API is a web service that provides comprehensive data about the chemical elements in the periodic table. It is designed to be simple, efficient, and easy to use for developers and educators in the field of chemistry and related sciences.

## Features
- **Get All Elements Endpoint**: Allows users to retrieve information about all elements in the periodic table.
- **Get Specific Element Endpoint**: Users can query information about a specific element by its name, symbol, or atomic number.

## Endpoints
1. **Get All Elements**
   - **Endpoint**: `/api/elements`
   - **Method**: GET
   - **Description**: Returns a JSON array of all elements in the periodic table.

2. **Get Specific Element**
   - **Endpoint**: `/api/elements/{id}`
   - **Method**: GET
   - **Description**: Retrieves detailed information about a specific element. The `{id}` can be the element's name, symbol, or atomic number.

## Response Structure
The API returns data in JSON format, including:
- Name
- Symbol
- Atomic Number
- Atomic Mass
- Standard State
- Melting Point (Kelvin)
- Boiling Point (Kelvin)
- Subcategory (e.g., Metal, Nonmetal, Noble Gas)

## Usage
- Users can make GET requests to the provided endpoints.
- The API automatically identifies whether the `{id}` in the endpoint is a name, symbol, or atomic number of an element.
- The `{id}` parameter is not case sensitive.

## Additional Notes
- This API is designed for educational and informational purposes.
- Users should ensure their requests adhere to the specified endpoint formats for successful responses.
