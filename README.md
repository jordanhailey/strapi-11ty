# A Strapi CMS-backed 11ty Static Site


## Development
> **Requirements**:
> - node
> - pnpm (package manager)

- Clone this repo and `cd` into it
- Run `npm run pnpm:install`
- Start the applications:
	- For a quick look, use the command `npm start`
	- For active development, open two terminal tabs at the base directory and run `start:strapi` and `start:11ty` to run each respective application.
	
### How Strapi works with 11ty
- The Strapi server, once its configured, and has published (and publicly exposed) content is available to be queried by eleventy. 
- 11ty, at startup, retieves its content from the exposed endpoints. 
- Any pages built by 11ty that make use of AJAX calls may also hit the exposed endpoints to create, read, update, delete content (as long as the specific CRUD operation is allowed on the content).
	- **NOTE**: For this to work, your Strapi server must be persistent. 

- Any changes made to Strapi (either via the Admin panel or changes to the application made in the `strapi/` repo) will not be picked up by 11ty after it completes it's build process.
	- A webhook to trigger CI/CD workflows can be configured to run on content updates, but for this extremely simplified project, I'm manually restarting local builds of the 11ty site.
