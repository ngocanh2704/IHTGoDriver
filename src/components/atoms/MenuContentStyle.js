'use strict'
import{
    StyleSheet, Dimensions
} from 'react-native';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

const responsiveFontSize = f => {
    return Math.sqrt(height * height + width * width) * (f / 100);
  };
  const { height, width } = Dimensions.get("window");

const MenuContentStyle = StyleSheet.create({
  container:
  {
    flex:1,
  },
  header:
  {
    padding:20,
    flex:3/10,
    backgroundColor:'#2196F3',
  },
  header_id:
  {
    paddingTop:5,
    paddingBottom: 5,
    color:'#fff',
    fontWeight: 'bold',
    fontSize: responsiveFontSize(3)
  },
  menu:
  {
    flex:7/10,
    padding:5,
    backgroundColor: '#fff'
  },
  menu_item:
  {
    padding:5,
    flexDirection:'row',
    alignItems:'center',
  },
  menu_text:
  {
    paddingLeft:5,
    color:'#616161',
    fontSize: responsiveFontSize(2.2)
  },
  menu_footer:
  {
    flex:1/10,
    padding:5,
    borderTopWidth:0,
    borderTopColor:'#4A4948'
  },
  version:
  {
    color:'#73716D',
    fontSize:12,
    marginBottom:5,
  },
  pointText:
  {
    color:'#E0E0E0',
    fontSize:responsiveFontSize(2),
    marginBottom:5,
  },
  copyright:
  {
    color:'#73716D',
    fontSize:12
  }
});

export default MenuContentStyle;