<p align="center"><a href="https://laravel.com" target="_blank"><img src="./logo.png" width="200"></a></p>

<div align="center">

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/anubra266/choc-ui/Tests?style=for-the-badge)](https://github.com/anubra266/choc-ui/actions?query=workflow%3ATests)

[![License](https://img.shields.io/github/license/anubra266/choc-ui.svg?style=for-the-badge)](https://github.com/anubra266/choc-ui/blob/master/LICENSE)
[![Author](https://img.shields.io/badge/author-@anubra266-blue.svg?style=for-the-badge)](https://github.com/anubra266)

</div>
<br />

## About Choc UI

**CHOC** is _acronym_ for [Chakra](https://chakra-ui.com) Higher Order Components. Choc UI is a collection of components, inspired by many sources of well used web components, which are rebuilt based on the Chakra UI library.

## Components

-   [ ] Elements - TailwindUI
    -   [ ] Headers
    -   [ ] Banners
    -   [ ] Flyout Menus
    -   [ ] Cards - Meraki UI
-   [ ] Page Sections - TailwindUI, Kutty
    -   [ ] Heros - Meraki UI
    -   [ ] Feature Sections - Meraki UI
    -   [ ] CTA Sections
    -   [ ] Pricing Sections
    -   [ ] Header Sections
    -   [ ] FAQs
    -   [ ] Newsletter Sections
    -   [ ] Stats
    -   [ ] Testimonials
    -   [ ] Blog Sections -
    -   [ ] Contact Sections
    -   [ ] Footers - Meraki UI
    -   [ ] Logo Clouds
-   [ ] Navigation - TailwindUI
    -   [ ] Navbars - Meraki UI
    -   [ ] Vertical Navigation (Menus)
    -   [ ] Sidebar Navigation
-   [ ] Headings - TailwindUI
    -   [ ] Page Headings
    -   [ ] Card Headings
    -   [ ] Section Headings
-   [ ] Application Shells - TailwindUI
    -   [ ] Stacked Layouts
    -   [ ] Sidebar Layouts - Kutty
    -   [ ] Multi Column Layouts
-   [ ] Example Pages - Meraki UI, Kutty
    -   [ ] Login Pages
    -   [ ] Registration Pages
    -   [ ] Error Pages

## Build Locally

Follow these steps to run project on your local server.

**Clone this repo**

```bash
git clone https://github.com/anubra266/choc-ui.git
```

**Install PHP Dependencies**

```bash
composer install
```

**Create Env File**

```bash
cp .env.example .env
```

**Generate App Key**

```bash
php artisan key:generate
```

**Download npm dependecies**

```bash
npm install
```

**OR**

```bash
yarn
```

**Build Project's Javascript Code**

```bash
yarn dev
```

**Start Project Server - Default Port:8000**

```bash
php artisan serve
```

## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are greatly appreciated.

Fork the Project

-   Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
-   Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
-   Push to the Branch (`git push origin feature/AmazingFeature`)
-   Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](./LICENSE.md) for more information.
