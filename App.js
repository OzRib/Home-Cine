import React, { useRef } from 'react';
import { FlatList, StyleSheet, Image, Text, View, StatusBar, ScrollView, TouchableNativeFeedback, DrawerLayoutAndroid } from 'react-native';

const {Lancamentos, hot, forYou, prev, love} = require('./filmes.json')

const Film = ({title, src}) => (
	<View style={styles.films}>
		<Image source={{uri:src}} style={styles.img}/>
		<Text style={styles.title}>{title}</Text>
	</View>
	);


const Topic = (props) => {
	return(
		<Text style={styles.topic}>{props.children}</Text>
	);
}

const Contenido = (props) => {
	const renderItem = ({ item }) => (
		<Film title={item.name} src={item.src} />
	);
	return (
	<View style={styles.boxContent}>
		<FlatList
			horizontal={true}
			data={props.data}
			renderItem={renderItem}
			keyExtractor={item => item.name}
		/>
	</View>
	);
}

const Menu = (props) => {
	return(
		<TouchableNativeFeedback onPress={props.onPress}>
			<View style={props.style} elevation={props.elevation}>
				<Text style={props.textStyle}>{props.children}</Text>
			</View>
		</TouchableNativeFeedback>
	);
}

const Head = (props) => {
  return(
    <View style={styles.header}>
	<View style={styles.head}>
	    <Menu textStyle={styles.textHead} onPress={props.onPress} style={styles.menu}>Home Cine</Menu>
	 </View>
    </View>
  );
}

const OptionMenu = (props) => {
	return(
	<View>
		<Menu style={styles.optionMenu} elevation={1} textStyle={styles.optionText}>{props.children}</Menu>
	</View>
	);
}

export default function App() {
  const drawer = useRef(null)
  const sideMenu = () => (
    <View style={styles.container}>
	  <ScrollView>
	  	<OptionMenu>Início</OptionMenu>
	  	<OptionMenu>Conta</OptionMenu>
	  	<OptionMenu>Gêneros</OptionMenu>
	  	<OptionMenu>Configurações</OptionMenu>
	  </ScrollView>
    </View>
  );
  return (
    <DrawerLayoutAndroid ref={drawer} 
	  drawerWidth={300}
	  drawerPosition="left"
	  renderNavigationView={sideMenu}>
    <View style={styles.container}>
	<Head onPress={() => drawer.current.openDrawer()}/>
	<ScrollView style={{width:'100%',}}>
	  <Topic>Lançamentos</Topic>
	  <Contenido data={Lancamentos}/>
	  <Topic>Em alta</Topic>
	  <Contenido data={hot}/>
	  <Topic>Recentes</Topic>
	  <Contenido data={prev}/>
	  <Topic>Para você</Topic>
	  <Contenido data={forYou}/>
	  <Topic>Mais de Romance</Topic>
	  <Contenido data={love}/>
	</ScrollView>
	<StatusBar barStyle='default'/>
    </View>
    </DrawerLayoutAndroid>
  );
}

const colors = {
	primary: {
		black: '#252525',
		blue: '#00A4FF',
	},
	secondary:{
		black: '#1C1C1C',
		blue: '#0080FF',
	},
}

const styles = StyleSheet.create({
  films:{
    marginTop: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: 3,
  },
  optionText: {
    fontSize: 23,
    color: 'white',
  },
  optionMenu: {
    paddingTop: 8,
    paddingLeft: 12,
    width: 300,
    height: 50,
  },
  img: {
    height: 340,
    width: 170,
  },
  title: {
    fontSize: 18,
    color: 'white',
  },
  topic: {
    marginLeft: 16,
    fontSize:34,
    color: 'white',
  },
  content: {
    backgroundColor: '#101010',
    height: 400,
    width: 170,
    margin: 4,
  },
  boxContent: {
    flexDirection: 'row',
    justifyContent:'center',
    backgroundColor: colors.secondary.black,
    height: 420,
    margin: 4,
  },
  container: {
    flex: 1,
    backgroundColor: colors.primary.black,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    alignItems: 'flex-start',
    backgroundColor: colors.primary.blue,
    height: '8%',
    width: '100%',
  },
  head: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  menu: {
    paddingVertical: '1%',
    paddingHorizontal: '2%',
    marginLeft: '4%',
    marginRight: '46%',
    backgroundColor: colors.secondary.blue,
  },
  textHead: {
    fontSize: 25,
    color: 'white',
  },
});
