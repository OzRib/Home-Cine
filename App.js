import React, { useRef } from 'react';
import { FlatList, StyleSheet, Image, useWindowDimensions, Text, View, StatusBar, ScrollView, TouchableNativeFeedback, DrawerLayoutAndroid } from 'react-native';

const Lancamentos = [
	{
		name: 'Jiujitsu',
		src: 'https://www.cafecomfilme.com.br/media/k2/items/cache/88cc9d1b5b2565b9ef4856fa522b0a33_XL.jpg?t=20201020_210104',
	},
	{
		name: 'T.E.N.E.T',
		src: 'https://www.musicbox-records.com/10106-large_default/tenet-deluxe-edition.jpg',
	},
	{
		name: 'Rei dos ladrões',
		src: 'https://filmesflix.online/wp-content/uploads/2018/09/Screenshot_3.png',
	},
	{
		name: 'Posto de Combate',
		src: 'https://www.magazine-hd.com/apps/wp/wp-content/uploads/2020/07/posto-de-combate-poster-pt.jpg',
	},
	{
		name: 'Mulher Maravilha 1984',
		src: 'http://www.atoupeira.com.br/wp-content/uploads/2020/06/mulher-maravilha-1984-estreia-1-de-outubro.jpg',
	},
]

const hot = [
	{
		name: 'Capturado',
		src: 'https://bluraytorrent.com.br/wp-content/uploads/2020/10/n2jxIxIwvYCAgye13xD6tGNOzCq.jpg',
	},
	{
		name: 'Jumanji',
		src: 'https://cdn.collider.com/wp-content/uploads/2019/11/jumanji-2-character-poster-kevin-hart.jpg',
	},
	{
		name: 'Aves de Rapina',
		src: 'https://img.elo7.com.br/product/zoom/2C04FB9/big-poster-filme-aves-de-rapina-lo008-tamanho-90x60-cm-geek.jpg',
	},
	{
		name: 'Scooby O filme',
		src: 'http://br.web.img3.acsta.net/pictures/20/03/05/20/58/4942195.jpg'
	},
	{
		name: 'Bad Boys Para Sempre',
		src: 'https://filmeshd.pro/wp-content/uploads/2020/04/sTKl7J5OWnsZSTRiKPIvPx4ngBG-scaled.jpg',
	},

]

const prev = [
	{
		name: 'John Wick 3',
		src: 'https://img01.mgo-images.com/image/thumbnail/v2/content/MMV0B5CF793A479BF53CAECF57B881CEFA18.jpeg',
	},
	{
		name: 'Naruto',
		src: 'https://animesonline.games/wp-content/uploads/2019/07/the-last-naruto-filme-online-games.jpg',
	},
	{
		name: 'Um Lugar Silencioso',
		src: 'https://playbrains.files.wordpress.com/2018/04/um-lugar-silencioso-poster.jpg?w=775'
	},
	{
		name: 'Coringa',
		src: 'https://belacine.com.br/wp-content/uploads/2019/12/tNMAhvD6IvEQk6xUn1qweyvmt00.jpg',
	},
	{
		name: 'Interestelar',
		src: 'https://m1.paperblog.com/i/526/5267075/interestelar-L-psYBM9.jpeg',
	},
]

const forYou = [
	{
		name: 'Vingadores Guerra \nInfinita',
		src: 'http://br.web.img2.acsta.net/pictures/18/03/16/15/08/2019826.jpg'
	},
	{
		name: 'Velozes e Furiosos 8',
		src: 'http://www.superflix.net/wp-content/uploads/2017/08/velozes-e-furiosos-8-395-poster.jpg', 
	},
	{
		name: 'Rambo 5',
		src: 'http://de.web.img2.acsta.net/pictures/19/08/12/11/55/4597870.jpg',
	},
	{
		name: 'Até O Último Homem',
		src: 'https://cinegarimpo.com.br/wp/content/uploads/2017/02/cinegarimpo.com.br-ate-o-ultimo-homem-hacksaw-ridge-ate-o-ultimo-homem.jpg',
	},
	{
		name: 'Dragon Ball Super\nBroly',
		src: 'https://fanart.tv/fanart/movies/503314/movieposter/dragon-ball-super-broly-5cb62e2994165.jpg',
	},
]

const love = [
	{
		name: 'Para Todos Os Garotos\nQue Já Amei',
		src: 'https://www.cafecomfilme.com.br/media/k2/items/cache/164819eac6b2c732bc404397ac7420ff_XL.jpg?t=1534659018',
	},
	{
		name: 'Titanic',
		src: 'https://fanart.tv/fanart/movies/597/movieposter/titanic-521a6089df23f.jpg',
	},
	{
		name: 'Por Lugares Incríveis',
		src: 'http://imagens.lelivros.love/2015/04/Baixar-Livro-Por-Lugares-Incriveis-Jennifer-Niven-em-PDF-ePub-e-Mobi.jpg',
	},
	{
		name: 'Brilho Eterno De Uma\nMente Sem\nLembranças',
		src: 'https://www.papodecinema.com.br/wp-content/uploads/2011/12/20200318-brilho-eterno-de-uma-mente-sem-lembrancas-papo-de-cinema-cartaaz.jpg',
	},
	{
		name: 'Nasce Uma Estrela',
		src: 'https://imagens.publicocdn.com/imagens.aspx/702040?tp=KM',
	},
]

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
	    <Menu onPress={props.onPress} style={styles.menu}>Home Cine</Menu>
	    <Text style={styles.logo}>Logo</Text>
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
  var vertical = Boolean();
  const window = useWindowDimensions();
  window.height>window.width ? vertical=true: vertical=false;
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
		red: '#00A4FF',
	},
	secondary:{
		black: '#1C1C1C',
		red: '#0080FF',
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
    marginLeft: '4%',
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
    backgroundColor: colors.primary.red,
    height: '8%',
    width: '100%',
  },
  head: {
    flexDirection: 'row',
    marginTop: '2%',
  },
  menu: {
    paddingVertical: '2%',
    paddingHorizontal: '4%',
    marginLeft: '4%',
    marginRight: '46%',
    backgroundColor: colors.secondary.red,
  },
  logo: {
    fontSize: 20,
  },
});
