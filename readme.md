## Getting Started:
This is a gross oversimplification and I'm sure I'm missing some steps...

That said, after you've cloned the repo here's some initial steps: 
* Make sure you have Xcode and Android Studio installed among other things.
* Follow install instructions at https://facebook.github.io/react-native/docs/getting-started
* I have been using VSCode for development, but you can use any IDE.
* Using command line/terminal, navigate to your project root directory.
* Run `npm install` if you have recently pulled any changes.
* Be running your emulator (via xcode or android studio) before running the command below.
* Create a .env file in the project root directory.  Add `TWILIO_PHONE_NUMBER=6515551234` and `MY_PHONE_NUMBER=6125551234` for testing with valid phone #s.  Use the Twilio phone number that sends your texts when you set up an account (also used in backend) and put in your own phone # to receive test texts.  The .env file will be gitignored.
* Start the app with `react-native run-ios` or `react-native run-android`
* NOTE: the first time you run one of those commands it takes a long time.  
* NOTE: Leave open the package launcher terminal window that opens when the process is done.


## Proposed Git Rules:
* Name your branch with something descriptive and include your name or initials in the branch name (e.g. signInScreen-neota or notifications-carla)
* For now, let's keep the remote branches indefinitely.  We can delete them in the future.  They may be helpful as people get started as an easier way to review past states.

## Proposed React Native Configuration:
* use wix react-native-navigation v2  https://github.com/wix/react-native-navigation
* use Fetch API for networking and requests https://facebook.github.io/react-native/docs/network (need to move from axios)
* recommend using react-devtools and/or react-native-debugger
* use .env file and react-native-dotenv for environment variables


## Image Sources:
* devil horn hands red background  - Image by <a href="https://pixabay.com/users/Mainzer-5900218/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2823831">Olaf Jouaux</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2823831">Pixabay</a>

