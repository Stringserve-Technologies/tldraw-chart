import * as customComponents from '../article-components'
import * as apiComponents from './api-docs'
import { Code, CodeBlock, CodeLinks, FocusLines } from './code'
import {
	A,
	ApiHeading,
	Blockquote,
	Callout,
	Divider,
	Embed,
	Heading1,
	Heading2,
	Heading3,
	Heading4,
	Heading5,
	Heading6,
	Image,
	ListItem,
	OrderedList,
	Paragraph,
	Pre,
	Small,
	TD,
	THead,
	TR,
	Table,
	UnorderedList,
	Video,
} from './generic'

export const components = {
	a: A,
	blockquote: Blockquote,
	code: Code,
	CodeLinks: CodeLinks,
	FocusLines: FocusLines,
	h1: Heading1,
	h2: Heading2,
	h3: Heading3,
	h4: Heading4,
	h5: Heading5,
	h6: Heading6,
	hr: Divider,
	img: Image,
	li: ListItem,
	ol: OrderedList,
	p: Paragraph,
	pre: Pre,
	table: Table,
	td: TD,
	thead: THead,
	tr: TR,
	ul: UnorderedList,
	video: Video,
	ApiHeading,
	CodeBlock,
	Embed,
	Image,
	Small: Small,
	Video,
	Callout,
	...customComponents,
	...apiComponents,
}
