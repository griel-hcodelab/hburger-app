import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import styled from 'styled-components/native';
import UserPhoto from '../../assets/user-photo.png';

const UserProfilePhoto = () => {
  const [image, setImage] = useState<null | ImagePicker.ImageInfo>(null);

  const openCamera = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
    }
  };

  return (
    <ProfilePhotoButton onPress={openCamera}>
      <ProfilePhoto source={image ? image : UserPhoto} />
    </ProfilePhotoButton>
  );
};

const ProfilePhotoButton = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1;
`;

const ProfilePhoto = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
`;

export default UserProfilePhoto;
