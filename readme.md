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
* use Fetch API for networking and requests https://facebook.github.io/react-native/docs/network 
* recommend using react-devtools and/or react-native-debugger
* use .env file and react-native-dotenv for environment variables
* use wix react-native-notifications https://github.com/wix/react-native-notifications/ (NOTE: current setup does not include ability to _receive_ push notifications on android; follow setup at https://github.com/wix/react-native-notifications/blob/master/docs/installation.md if this is needed in future)


## Image Sources:
* devil horn hands red background  - Image by <a href="https://pixabay.com/users/Mainzer-5900218/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2823831">Olaf Jouaux</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=2823831">Pixabay</a>
* bowl - https://pixabay.com/photos/bowl-tableware-food-container-3243264/
* river-stones - <a href="http://www.peakpx.com/400774/rock-cairn">Peakpx</a> - "Description of this image: equilibrium of white stone near body of water"
* fire - Image by <a href="https://pixabay.com/users/Skitterphoto-324082/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=726268">Rudy and Peter Skitterians</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=726268">Pixabay</a>
* rock people - Image by <a href="https://pixabay.com/users/Wokandapix-614097/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1771913">Wokandapix</a> from <a href="https://pixabay.com/?utm_source=link-attribution&amp;utm_medium=referral&amp;utm_campaign=image&amp;utm_content=1771913">Pixabay</a>



## TODO:
* add way to logout so token in asyncStorage is cleared.  currently once you log in you always have a token in asyncStorage so in order to go through the login process again you have to uninstall the app from your device or simulator.  as of now, the program never calls authLogout or authClearStorage anywhere else in code.  (8/15/19 - Neota)