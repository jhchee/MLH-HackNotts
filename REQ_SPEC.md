# Software Requirement Specification

The key words "MUST", "MUST NOT", "REQUIRED", "SHALL", "SHALL NOT", "SHOULD", "SHOULD NOT", "RECOMMENDED",  "MAY", and "OPTIONAL" in this document are to be interpreted as described in [RFC 2119](https://tools.ietf.org/html/rfc2119).

## Functional requirements
1. The software **SHALL** provide a firework simulation.
2. The user will have access to fireworks of varying properties (e.g. speed, flight time, burst pattern, color). These properties **SHOULD** be editable by the user, to create custom fireworks.
3. The user will have access to a timeline control, in which they can place fireworks to be launched in a pre-planned manner.
4. Once set up, the user can run the simulation.

5. The user **MAY** have the ability to save/load firework timelines as local files, which the user can then share. The user may also have the ability to import/export custom fireworks.

## Non-function requirements
1. The firework timeline **MUST** be stored in, and loaded from, JSON format.
2. The user should be able to capy-paste custom fireworks within the timeline.
3. The user **SHOULD** be able to view the firework simulation in 3-D, using the mouse to change the camera angle.
