// Post List -> index.js

const renderItem = ({item}) => {
  return (
    <>
      <View style={styles.mainView}>
        <View style={styles.row}>
          <Image style={styles.dp} source={{uri: item.owner.picture}} />
          <View style={{flexDirection: 'column'}}>
            <Text style={styles.name}>
              {item.owner.firstName + ' ' + item.owner.lastName}
            </Text>
            <Text style={styles.email}> {item.owner.email}</Text>
          </View>
        </View>
        <View style={styles.border} />
        <Image style={styles.stretch} source={{uri: item.image}} />
        <View style={styles.row}>
          {item.tags.map(value => {
            return <Text style={styles.tags}> {value}</Text>;
          })}
        </View>
        <Text style={styles.text}> {item.text}</Text>
        <Text style={styles.link}> {item.link}</Text>
        <View style={styles.border} />
        <View style={styles.row}>
          <Image style={styles.likeButton} source={IMAGE.FILLHEART} />
          <Text style={styles.likeDigit}> {item.likes}</Text>
          <Text style={styles.like}> Likes</Text>
          <Text style={styles.publishDate}>
            {getDateMonth(item.publishDate)}
          </Text>
        </View>
        <View style={styles.border} />
        <TouchableOpacity>
          <Text style={styles.navComments}> {STRING.GET_POST_COMMENTS} </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.navComments}> {STRING.GET_OWNER_PROFILE}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

// user list -> index

const renderItem = ({item}) => {
  return (
    <View style={styles.mainView}>
      <Image style={styles.stretch} source={{uri: item.picture}} />
      <Text style={styles.textID}> {item.id}</Text>
      <Text style={styles.textName}>
        {item.title + '. ' + item.firstName + ' ' + item.lastName}
      </Text>
      <Text style={styles.textEmail}> {item.email}</Text>
      <View style={styles.border} />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('FullProfile', {fullProfile: item.id})
        }>
        <Text style={styles.navComments}> {STRING.GET_FULL_PROFILE} </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('PostList', {postList: item.id})}>
        <Text style={styles.navComments}> {STRING.GET_POST_LISTS} </Text>
      </TouchableOpacity>
    </View>
  );
};
