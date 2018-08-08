/**
 * @license Copyright (c) 2003-2018, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md.
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import SimpleUpload from 'ckeditor5-simple-upload/src/simpleupload';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	BlockQuote,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	Paragraph,
	Table,
	TableToolbar,
	Alignment,
	SimpleUpload
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'link',
			'alignment',
			'bulletedList',
			'numberedList',
			'imageUpload',
			'blockQuote',
			'undo',
			'redo',
			'insertTable'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: '段落', class: 'ck-heading_paragraph' },
			{ model: 'heading1', view: 'h1', title: '見出し 1', class: 'ck-heading_heading1' },
			{ model: 'heading2', view: 'h2', title: '見出し 2', class: 'ck-heading_heading2' },
			{ model: 'heading3', view: 'h3', title: '見出し 3', class: 'ck-heading_heading3' },
			{ model: 'heading4', view: 'h4', title: '見出し 4', class: 'ck-heading_heading4' },
			{ model: 'heading5', view: 'h5', title: '見出し 5', class: 'ck-heading_heading5' },
			{ model: 'heading6', view: 'h6', title: '見出し 6', class: 'ck-heading_heading6' }
		]
	},
	table: {
		toolbar: [ 'tableColumn', 'tableRow', 'mergeTableCells' ]
	},
	alignment: {
		options: [ 'left', 'center', 'right' ]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
