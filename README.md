<div align="center">
  <h1>SkyRats</h1>
<img src="https://github.com/user-attachments/assets/2f13590d-a6e6-4c0c-a2f3-32da2cdcbe4d" alt="Skyrats Logo Banner" width="90%">
  <p width="75%">
The SkyRats project is designed to manage and handle specific entity spawning events in Minecraft. It identifies certain entities and executes predefined actions on them, such as killing them in a most horrible fashion.
</p>
</div>

## Project Structure

- `src/`: Contains the TypeScript source files.
  - `main.ts`: Entry point of the application.
  - `skyrats.ts`: Contains the `SkyRatsManager` class which handles entity spawning events.
  - `SkyRatsError.ts`: Defines the error handling function.
  - `types/creator-tools.d.ts`: Type declaration for the 'creator-tools' module.
- `scripts/`: Contains the compiled JavaScript files.
  - `main.js`: Compiled entry point.
  - `skyrats.js`: Compiled `SkyRatsManager` class.
  - `SkyRatsError.js`: Compiled error handling function.
- `tsconfig.json`: TypeScript configuration file.

## Setup

1. **Clone the repository:**

   ```sh
   git clone https://github.com/DJStompZone/skyrats.git
   cd skyrats
   ```

2. **Install dependencies:**

   ```sh
   npm i
   ```

3. **Compile TypeScript to JavaScript:**

   ```sh
   npm run build
   ```

## Usage

1. **Run the project:**

   ```sh
   npm start
   ```

2. **In Minecraft:**
   - Ensure the Minecraft server is running and the necessary mods/plugins are installed.
   - The `SkyRatsManager` will automatically handle entity spawning events as defined in the code.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature-branch`).
6. Create a new Pull Request.

## Author

**Dylan Magar** ("DJ Stomp")

- GitHub: [@DJStompZone](https://github.com/djstompzone)
- ![Discord](https://img.shields.io/discord/599808270655291403?logo=discord&label=StompZone%20Discord)

## License

MIT License (see [LICENSE](LICENSE) file)
