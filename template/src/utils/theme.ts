import { GestureResponderEvent } from 'react-native';
import switchTheme from 'react-native-theme-switch-animation';

export function changeTheme(e:GestureResponderEvent, onSwitch: () => void) {
    e.currentTarget.measure((x1, y1, width, height, px, py) => {

      switchTheme({
        switchThemeFunction: () => {
          console.log('change theme');
          if(onSwitch) {
            onSwitch();
          }
        },
        animationConfig: {
          type: 'circular',
          duration: 500,
          startingPoint: {
            cy: py + height / 2,
            cx: px + width / 2,
          },
        },
      });
    });
}
