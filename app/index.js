import { View, Text } from 'react-native';
import { Link } from 'expo-router';

// ========== HOMEPAGE ==========
const Home = () => {
    return (
        <View>
            <Link href="/signup">Sign Up</Link>
            <Link href="/login">Log In</Link>
        </View>
    )
}

export default Home;