import {Component} from 'react'
import {
  Heading,
  Container,
  Generate,
  Label,
  MemeContainer,
  TextContent,
  CustomForm,
} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here

class MemeGenerator extends Component {
  state = {
    imageUrlInput: '',
    topTextInput: '',
    bottomTextInput: '',
    activeFontSizeOptionId: fontSizesOptionsList[0].optionId,
    imageUrl: '',
    topText: '',
    bottomText: '',
    activeFontSizeId: '',
  }

  onGenerateMeme = () => {
    console.log('clicked')
    const {
      imageUrlInput,
      topTextInput,
      bottomTextInput,
      activeFontSizeOptionId,
    } = this.state

    this.setState({
      imageUrl: imageUrlInput,
      topText: topTextInput,
      bottomText: bottomTextInput,
      activeFontSizeId: activeFontSizeOptionId,
    })
  }

  onChangeImageUrlInput = event => {
    this.setState({imageUrlInput: event.target.value})
  }

  onChangeTopTextInput = event => {
    this.setState({topTextInput: event.target.value})
  }

  onChangeBottomTextInput = event => {
    this.setState({bottomTextInput: event.target.value})
  }

  onChangeActiveFontSizeOptionId = event => {
    this.setState({activeFontSizeOptionId: event.target.value})
  }

  render() {
    const {
      activeFontSizeOptionId,
      activeFontSizeId,
      imageUrl,
      topText,
      bottomText,
    } = this.state

    return (
      <Container>
        <CustomForm>
          <Heading>Meme Generator</Heading>
          <Label htmlFor="image">Image URL</Label>
          <input
            type="text"
            id="image"
            placeholder="Enter The Image URl"
            onChange={this.onChangeImageUrlInput}
          />
          <Label htmlFor="top-text">Top Text</Label>
          <input
            type="text"
            id="top-text"
            placeholder="Enter The Top Text"
            onChange={this.onChangeTopTextInput}
          />
          <Label htmlFor="bottom-text">Bottom Text</Label>
          <input
            type="text"
            id="bottom-text"
            placeholder="Enter The Bottom Text"
            onChange={this.onChangeBottomTextInput}
          />
          <Label htmlFor="font">Font Size</Label>
          <select
            id="font"
            value={activeFontSizeOptionId}
            onChange={this.onChangeActiveFontSizeOptionId}
          >
            {fontSizesOptionsList.map(each => (
              <option key={each.optionId} value={each.optionId}>
                {each.displayText}
              </option>
            ))}
          </select>
          <Generate type="button" onClick={this.onGenerateMeme}>
            Generate
          </Generate>
        </CustomForm>
        <MemeContainer data-testid="meme" backgroundImage={imageUrl}>
          <TextContent activeFontSizeId={activeFontSizeId}>
            {topText}
          </TextContent>
          <TextContent activeFontSizeId={activeFontSizeId}>
            {bottomText}
          </TextContent>
        </MemeContainer>
      </Container>
    )
  }
}

export default MemeGenerator
