```jsx
import Button from '@atlaskit/button';
<div className='Movie__list-btn'>
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
	<Button>4</Button>
	<Button>5</Button>
	<Button>6</Button>
	<Button>7</Button>
	<Button>...</Button>
</div>
```

```css
.Movie__list-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.Movie__list-btn Button {
  margin-right: 0.5rem;
  background: rgba(0, 0, 0, 0.205);
  width: 40px;
  font-size: 16px;
}
.Movie__list-btn Button:hover {
  background: rgba(0, 0, 0, 0.753);
}
```