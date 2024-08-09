
# SpotNews

SpotNews is a ReactJS-based web application that fetches and displays real-time news across various categories. The application utilizes a public news API to provide users with the latest news articles, featuring an infinite scroll feature and a skeleton loader for a seamless user experience.

## Features

- **Real-Time News**: Fetches the latest news articles from a public API.
- **Category-Based News**: View news across various categories such as Technology, Sports, Business, Entertainment, and more.
- **Infinite Scroll**: Automatically loads more articles as you scroll down the page.
- **Skeleton Loader**: Provides a smooth loading experience while the news content is being fetched.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Installation

To run this project locally, follow these steps:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 14.x or later)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Clone the Repository

```bash
git clone https://github.com/yourusername/spotnews.git
cd spotnews
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the root of your project and add your API key:

```bash
REACT_APP_NEWS_API_KEY=your_api_key_here
```

### Running the Application

To start the development server:

```bash
npm start
```

This will start the application on `http://localhost:3000`. Open it in your browser to see SpotNews in action.

### Build for Production

To create a production build:

```bash
npm run build
```

This will create an optimized build of your application in the `build/` directory.

## Contributing

Contributions are welcome! Please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
