# Hypotenuse Handmade
## bitcoin/lightning native small business web app

### MVP
- [ ] first pass at design for web store - may need to migrate to a different build for the real version
- [ ] mobile optimized with mobile-specific navigation

- User Accounts 
    - [ ] users can register new account
    - [ ] cart saved as a session for x number of days

- Products
    - [ ] nav on side includes category headers, sub-categories nested

- Checkout
    - [ ] BTCPayServer

#### Stretch
- [ ] stretch goals here


### Set Up
1. create .env (all must begin with REACT_APP - REACT_APP_NEW_VAR)
    - set REACT_APP_BASE_URL to your local development url (eg localhost:9000)

### Netlify Deploy
- set REACT_APP_BASE_URL environment variable to your live backend
- investigate netlify cl
- Build command:
    - CI=false npm run build
    - does something with ignoring errors, fixed something that strictmode didn't -- investigate