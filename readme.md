## Getting Started:
This is a gross oversimplification and I'm sure I'm missing some steps...

That said, after you've cloned the repo here's some initial steps: 
* Make sure you have Xcode and Android Studio installed among other things.
* Follow install instructions at https://facebook.github.io/react-native/docs/getting-started
* I have been using VSCode for development, but you can use any IDE.
* Using command line/terminal, navigate to your project root directory.
* Run `npm install` if you have recently pulled any changes.
* Be running your emulator (via xcode or android studio) before running the command below.
* Start the app with `react-native run-ios` or `react-native run-android`
* NOTE: the first time you run one of those commands it takes a long time.  
* NOTE: Leave open the package launcher terminal window that opens when the process is done.


## Proposed Git Rules:
* I protected master and develop branches.  Merge to master requires 2 reviewers.  Merge to develop requires 1 reviewer.
* Name your branch with something descriptive and include your name or initials in the branch name (e.g. signInScreen-neota or notifications-carla)
* For now, let's keep the remote branches indefinitely.  We can delete them in the future.  They may be helpful as people get started as an easier way to review past states.

## Proposed React Native Configuration:
* use wix react-native-navigation v2  https://github.com/wix/react-native-navigation
* use Fetch API for networking and requests https://facebook.github.io/react-native/docs/network
* recommend using react-devtools and/or react-native-debugger
