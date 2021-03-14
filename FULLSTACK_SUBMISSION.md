# Project Connect

The appliction is a mapping game designed to crowdsource information regarding locations of schools around the world. In the game,
users are asked to indentify school locations from a series of satellite images of varying locations. The answers are then stored in a database for further analyzing.

For an overview of Project Connect, refer to [unicef/projectconnect-app](https://github.com/unicef/projectconnect-app).

For more technical information regarding the application, refer to [the README of this repo](/README.md).

## Usage

The (beta) production version of the application is live at [projectconnect.app](https://projectconnect.app/).

The basic flow of the application is quite intuitive. Some features to test out:
- The mapping test (gets propmted when starting the mapping)
- Mapping schools
- Sign in using Facebook/Google/Twitter
- Profile page (styled version coming soon to prod)

## Project hours

Most of these hours were spent on creating a [user management functionality](https://github.com/unicef/projectconnect-game/blob/master/docs/user-mgmt.md).

| Date       | Hrs | Topics                                                                                                                                                                                                                                                                         |
|------------|-----|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 29/10/2020 | 4.5 | Getting to know codebase, kickoff meet                                                                                                                                                                                                                                         |
|  4/11/2020 |  2  | initial sketches & ideas                                                                                                                                                                                                                                                       |
|  9/11/2020 |  7  | Auth0 integration                                                                                                                                                                                                                                                              |
| 23/11/2020 |  4  | PostgreSQL setup, NextAuth.js                                                                                                                                                                                                                                                  |
|  1/12/2020 |  8  | NextAuth.js, https://github.com/lacabra/proco-map-app/pull/10                                                                                                                                                                                                                  |
|  11/1/2021 |  8  | psql schema, connection                                                                                                                                                                                                                                                        |
|  22/1/2021 |  6  | Account page, navbar                                                                                                                                                                                                                                                           |
|  25/1/2021 |  7  | api endpoints, account page, navbar                                                                                                                                                                                                                                            |
|  1/2/2021  |  5  | styling, sign-in flow                                                                                                                                                                                                                                                          |
|  2/2/2021  |  8  | next-auth to uuid inegration / flow                                                                                                                                                                                                                                            |
|  3/2/2021  |  9  | Sign in uuid flow (jwt callback), api uuid endpoints                                                                                                                                                                                                                           |
|  6/2/2021  |  7  | Tweaking auth endpoins, finalizing uuid flow                                                                                                                                                                                                                                   |
|  8/2/2021  |  8  | Create, use and style signin page, start styling profile page                                                                                                                                                                                                                  |
|  9/2/2021  | 8.5 | Custom styling dropdown with styled components, catch up on git                                                                                                                                                                                                                |
|  15/2/2021 |  5  | Investigating styled-components memory leak, start to refactor signin page to vanilla css                                                                                                                                                                                      |
|  16/2/2021 |  10 | Finalize signing page css (https://github.com/lacabra/proco-map-app/pull/27), address issues with NextAuth adapters (https://github.com/lacabra/proco-map-app/pull/24) (https://github.com/lacabra/proco-map-app/issues/23)                                                    |
|  17/2/2021 |  5  | Prod build error investigation, navbar css                                                                                                                                                                                                                                     |
|  22/2/2021 |  4  | Finalize navbar css, rigorous navbar testing, PR                                                                                                                                                                                                                               |
|  23/2/2021 |  9  | Sign in page error messages (https://github.com/lacabra/proco-map-app/pull/40); More investigation on prod vs dev custom model issue (https://github.com/lacabra/proco-map-app/pull/41); Fix saveUserUuid API endpoit error (https://github.com/lacabra/proco-map-app/pull/42) |
|  7/3/2021  |  4  | Profile page styling                                                                                                                                                                                                                                                           |
|  11/3/2021 |  5  | Learning flexbox, recreating profile page layout                                                                                                                                                                                                                               |
|  12/3/2021 |  5  | Profile page styling, Fact/Achievement API for profile page                                                                                                                                                                                                                    |
|  13/3/2021 |  5  | Profile fact API, profile page finishing touches, PR |   
  
 
 
**Total hours: 144**
