import {style} from 'glamor';

const styles = {
  img: style({
    maxWidth: '70%'
  })
};

export default function ProductImage({images}) {
  const {src} = images[0];

  return (
    <img src={src} {...styles.img}/>
  );
}