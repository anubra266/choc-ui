<p align="center"><a href="https://choc-ui.tech" target="_blank"><img src="./public/logo.png" width="200"></a></p>
 
<div align="center">

[![License](https://img.shields.io/github/license/anubra266/choc-ui.svg?style=for-the-badge)](https://github.com/anubra266/choc-ui/blob/master/LICENSE)
[![Author](https://img.shields.io/badge/author-@anubra266-blue.svg?style=for-the-badge)](https://github.com/anubra266)

</div>
<br />

## About Choc UI

[**CHOC**](https://choc-ui.tech) is _acronym_ for [Chakra](https://chakra-ui.com) Higher Order Components. Choc UI is a collection of components, inspired by many sources of well used web components, which are rebuilt based on the Chakra UI library.

See it in action at https://choc-ui.tech

<br/>

## Installation
These instructions would get started on using the choc-ui on your project

### > Prerequisites
  * Node.js
  * npm / yarn

If you are using npm you can install using the command below.

```sh
$ yarn add @chakra-ui/react framer-motion

```
If you are using yarn you can install using the command below.

```sh 
$ npm install @chakra-ui/react framer-motion
```


If you are having any challenge installing it you can create an issue on this repository or visit [Chakra UI](https://chakra-ui.com/docs/getting-started) and follow the instructions there.

<br/>

## Configuration.
##
### **Setup Provider:**
For Chakra UI to work correctly, you need to setup the ChakraProvider at the root of your application.
Go to the root of your application and do this:

```jsx
import * as React from "react";
// 1. import 'ChakraProvider' component
import { ChakraProvider } from "@chakra-ui/react";
function App() {
    // 2. Use at the root of your app
    return (
        <ChakraProvider>
            <App />
        </ChakraProvider>
    );
}

```

For Next.js, you need to set this up in pages/_app.js or pages/_app.tsx

For Gatsby, install the @chakra-ui/gatsby-plugin . It does it automatically for you.

For Create React App, you need to set this up in index.js or index.tsx

<br/>

### **Add Custom Theme (Optional):**

  ```jsx
  // 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react"
// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
     900: "#1a365d",
     800: "#153e75",
     700: "#2a69ac",
   },
 }
 const theme = extendTheme({ colors })
 // 3. Pass the 'theme' prop to the 'ChakraProvider'
 function App() {
   return (
     <ChakraProvider theme={theme}>
       <App />
     </ChakraProvider>
   )
 }
```

<br/>

## Components

- [x] Elements
  - [x] Headers
  - [x] Cards
  - [x] Alerts
  - [x] Pagination
  - [x] Badges
  - [x] Gradient Icons
  - [ ] Empty - Antd
  - [ ] Result - Antd
- [ ] Page Sections
  - [x] Heros
  - [x] Feature Sections
  - [x] CTA Sections
  - [ ] Pricing Sections
  - [ ] Content Sections
  - [ ] FAQs
  - [ ] Newsletter Sections
  - [ ] Stats
  - [ ] Testimonials
  - [ ] Blog Sections -
  - [ ] Contact Sections
  - [ ] Footers - Meraki UI
  - [ ] Logo Clouds
- [ ] Navigation - TailwindUI
  - [x] Navbars
  - [ ] Vertical Navigation (Menus)
  - [ ] Sidebar Navigation
- [ ] Headings - TailwindUI
  - [ ] Card Headings
  - [ ] Section Headings
  - [ ] Page Headings
- [ ] Example Pages - Meraki UI, Kutty
  - [ ] Landing Pages
  - [ ] Contact Pages
  - [ ] Error Pages
  - [ ] Home Screens
  - [ ] Detail Screens
  - [ ] Settings Screens
- [ ] Forms Tailwind
  - [ ] Form Layouts - Tailwind
  - [ ] Sign in and Registration
  - [ ] Action Panels
- [ ] Lists Tailwind
  - [ ] Tables
  - [ ] Stacked Lists
  - [ ] Grid Lists
  - [ ] Feeds
- [ ] Application Shells
  - [ ] Sidebar Layouts - Kutty
  - [ ] Page Layouts - Antd
  - [ ] Stacked Layouts - TailwindUI
  - [ ] Multi Column Layouts - TailwindUI

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated. See [Contributing.md](./CONTRIBUTING.md)

## License

Distributed under the MIT License. See [LICENSE](./LICENSE.md) for more information.

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/anubra266"><img src="https://avatars.githubusercontent.com/u/30869823?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Abraham</b></sub></a><br /><a href="https://github.com/anubra266/choc-ui/commits?author=anubra266" title="Code">💻</a> <a href="#design-anubra266" title="Design">🎨</a> <a href="#maintenance-anubra266" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://github.com/GabrielFemi"><img src="https://avatars.githubusercontent.com/u/39733548?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Akinyosoye Gabriel</b></sub></a><br /><a href="#maintenance-GabrielFemi" title="Maintenance">🚧</a></td>
    <td align="center"><a href="https://michaelgrigoryan.com"><img src="https://avatars.githubusercontent.com/u/56165400?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Michael Grigoryan</b></sub></a><br /><a href="https://github.com/anubra266/choc-ui/commits?author=MichaelGrigoryan25" title="Code">💻</a> <a href="#design-MichaelGrigoryan25" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/abraham266"><img src="https://avatars.githubusercontent.com/u/73303261?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Anu</b></sub></a><br /><a href="https://github.com/anubra266/choc-ui/commits?author=abraham266" title="Code">💻</a></td>
    <td align="center"><a href="http://geniushub.com.ng/"><img src="https://avatars.githubusercontent.com/u/12122519?v=4?s=50" width="50px;" alt=""/><br /><sub><b>Julius Idowu</b></sub></a><br /><a href="#maintenance-JuliRash" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
