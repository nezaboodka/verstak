// The below copyright notice and the license permission notice
// shall be included in all copies or substantial portions.
// Copyright (C) 2019-2026 Nezaboodka Software <contact@nezaboodka.com>
// License: https://raw.githubusercontent.com/nezaboodka/verstak/master/LICENSE
// By contributing, you agree that your contributions will be
// automatically licensed under the license referred above.

import { inherit, RtElement, ConfOrScript, RtNode } from "reactronic"
import { El, ElKind } from "../core/El.js"
import { HtmlDriver } from "../core/WebDriver.js"

// A

export function A<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLAnchorElement, M, D>>): RtNode<El<HTMLAnchorElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: A.name,
    driver: HtmlTags.a,
  }))
}

// Abbr

export function Abbr<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Abbr.name,
    driver: HtmlTags.abbr,
  }))
}

// Address

export function Address<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Address.name,
    driver: HtmlTags.address,
  }))
}

// Area

export function Area<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLAreaElement, M, D>>): RtNode<El<HTMLAreaElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Area.name,
    driver: HtmlTags.area,
  }))
}

// Article

export function Article<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Article.name,
    driver: HtmlTags.article,
  }))
}

// Aside

export function Aside<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Aside.name,
    driver: HtmlTags.aside,
  }))
}

// Audio

export function Audio<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLAudioElement, M, D>>): RtNode<El<HTMLAudioElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Audio.name,
    driver: HtmlTags.audio,
  }))
}

// B

export function B<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: B.name,
    driver: HtmlTags.b,
  }))
}

// Base

export function Base<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLBaseElement, M, D>>): RtNode<El<HTMLBaseElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Base.name,
    driver: HtmlTags.base,
  }))
}

// Bdi

export function Bdi<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Bdi.name,
    driver: HtmlTags.bdi,
  }))
}

// Bdo

export function Bdo<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Bdo.name,
    driver: HtmlTags.bdo,
  }))
}

// Big

export function Big<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Big.name,
    driver: HtmlTags.big,
  }))
}

// BlockQuote

export function BlockQuote<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: BlockQuote.name,
    driver: HtmlTags.blockquote,
  }))
}

// Body

export function Body<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLBodyElement, M, D>>): RtNode<El<HTMLBodyElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Body.name,
    driver: HtmlTags.body,
  }))
}

// BR

export function BR<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLBRElement, M, D>>): RtNode<El<HTMLBRElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: BR.name,
    driver: HtmlTags.br,
  }))
}

// Button

export function Button<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLButtonElement, M, D>>): RtNode<El<HTMLButtonElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Button.name,
    driver: HtmlTags.button,
  }))
}

// Canvas

export function Canvas<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLCanvasElement, M, D>>): RtNode<El<HTMLCanvasElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Canvas.name,
    driver: HtmlTags.canvas,
  }))
}

// Caption

export function Caption<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableCaptionElement, M, D>>): RtNode<El<HTMLTableCaptionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Caption.name,
    driver: HtmlTags.caption,
  }))
}

// Cite

export function Cite<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Cite.name,
    driver: HtmlTags.cite,
  }))
}

// Code

export function Code<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Code.name,
    driver: HtmlTags.code,
  }))
}

// Col

export function Col<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableColElement, M, D>>): RtNode<El<HTMLTableColElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Col.name,
    driver: HtmlTags.col,
  }))
}

// ColGroup

export function ColGroup<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableColElement, M, D>>): RtNode<El<HTMLTableColElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: ColGroup.name,
    driver: HtmlTags.colgroup,
  }))
}

// Data

export function Data<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLDataElement, M, D>>): RtNode<El<HTMLDataElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Data.name,
    driver: HtmlTags.data,
  }))
}

// DataList

export function DataList<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLDataListElement, M, D>>): RtNode<El<HTMLDataListElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: DataList.name,
    driver: HtmlTags.datalist,
  }))
}

// DD

export function DD<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: DD.name,
    driver: HtmlTags.dd,
  }))
}

// Del

export function Del<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Del.name,
    driver: HtmlTags.del,
  }))
}

// Details

export function Details<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Details.name,
    driver: HtmlTags.details,
  }))
}

// Dfn

export function Dfn<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Dfn.name,
    driver: HtmlTags.dfn,
  }))
}

// Div

export function Div<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLDivElement, M, D>>): RtNode<El<HTMLDivElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Div.name,
    driver: HtmlTags.div,
  }))
}

// DL

export function DL<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLDListElement, M, D>>): RtNode<El<HTMLDListElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: DL.name,
    driver: HtmlTags.dl,
  }))
}

// DT

export function DT<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: DT.name,
    driver: HtmlTags.dt,
  }))
}

// EM

export function EM<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: EM.name,
    driver: HtmlTags.em,
  }))
}

// Embed

export function Embed<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLEmbedElement, M, D>>): RtNode<El<HTMLEmbedElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Embed.name,
    driver: HtmlTags.embed,
  }))
}

// FieldSet

export function FieldSet<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLFieldSetElement, M, D>>): RtNode<El<HTMLFieldSetElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FieldSet.name,
    driver: HtmlTags.fieldset,
  }))
}

// FigCaption

export function FigCaption<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: FigCaption.name,
    driver: HtmlTags.figcaption,
  }))
}

// Figure

export function Figure<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Figure.name,
    driver: HtmlTags.figure,
  }))
}

// Footer

export function Footer<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Footer.name,
    driver: HtmlTags.footer,
  }))
}

// Form

export function Form<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLFormElement, M, D>>): RtNode<El<HTMLFormElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Form.name,
    driver: HtmlTags.form,
  }))
}

// H1

export function H1<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H1.name,
    driver: HtmlTags.h1,
  }))
}

// H2

export function H2<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H2.name,
    driver: HtmlTags.h2,
  }))
}

// H3

export function H3<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H3.name,
    driver: HtmlTags.h3,
  }))
}

// H4

export function H4<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H4.name,
    driver: HtmlTags.h4,
  }))
}

// H5

export function H5<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H5.name,
    driver: HtmlTags.h5,
  }))
}

// H6

export function H6<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadingElement, M, D>>): RtNode<El<HTMLHeadingElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: H6.name,
    driver: HtmlTags.h6,
  }))
}

// Head

export function Head<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHeadElement, M, D>>): RtNode<El<HTMLHeadElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Head.name,
    driver: HtmlTags.head,
  }))
}

// Header

export function Header<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Header.name,
    driver: HtmlTags.header,
  }))
}

// HGroup

export function HGroup<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: HGroup.name,
    driver: HtmlTags.hgroup,
  }))
}

// HR

export function HR<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHRElement, M, D>>): RtNode<El<HTMLHRElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: HR.name,
    driver: HtmlTags.hr,
  }))
}

// Html

export function Html<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLHtmlElement, M, D>>): RtNode<El<HTMLHtmlElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Html.name,
    driver: HtmlTags.html,
  }))
}

// I

export function I<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: I.name,
    driver: HtmlTags.i,
  }))
}

// IFrame

export function IFrame<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLIFrameElement, M, D>>): RtNode<El<HTMLIFrameElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: IFrame.name,
    driver: HtmlTags.iframe,
  }))
}

// Img

export function Img<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLImageElement, M, D>>): RtNode<El<HTMLImageElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Img.name,
    driver: HtmlTags.img,
  }))
}

// Input

export function Input<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLInputElement, M, D>>): RtNode<El<HTMLInputElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Input.name,
    driver: HtmlTags.input,
  }))
}

// Ins

export function Ins<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLModElement, M, D>>): RtNode<El<HTMLModElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Ins.name,
    driver: HtmlTags.ins,
  }))
}

// Kbd

export function Kbd<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Kbd.name,
    driver: HtmlTags.kbd,
  }))
}

// KeyGen

export function KeyGen<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: KeyGen.name,
    driver: HtmlTags.keygen,
  }))
}

// Label

export function Label<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLLabelElement, M, D>>): RtNode<El<HTMLLabelElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Label.name,
    driver: HtmlTags.label,
  }))
}

// Legend

export function Legend<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLLegendElement, M, D>>): RtNode<El<HTMLLegendElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Legend.name,
    driver: HtmlTags.legend,
  }))
}

// LI

export function LI<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLLIElement, M, D>>): RtNode<El<HTMLLIElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: LI.name,
    driver: HtmlTags.li,
  }))
}

// Link

export function Link<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLLinkElement, M, D>>): RtNode<El<HTMLLinkElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Link.name,
    driver: HtmlTags.link,
  }))
}

// Main

export function Main<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Main.name,
    driver: HtmlTags.main,
  }))
}

// Map

export function Map<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLMapElement, M, D>>): RtNode<El<HTMLMapElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Map.name,
    driver: HtmlTags.map,
  }))
}

// Mark

export function Mark<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Mark.name,
    driver: HtmlTags.mark,
  }))
}

// Menu

export function Menu<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Menu.name,
    driver: HtmlTags.menu,
  }))
}

// MenuItem

export function MenuItem<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: MenuItem.name,
    driver: HtmlTags.menuitem,
  }))
}

// Meta

export function Meta<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLMetaElement, M, D>>): RtNode<El<HTMLMetaElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Meta.name,
    driver: HtmlTags.meta,
  }))
}

// Meter

export function Meter<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Meter.name,
    driver: HtmlTags.meter,
  }))
}

// Nav

export function Nav<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Nav.name,
    driver: HtmlTags.nav,
  }))
}

// NoIndex

export function NoIndex<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: NoIndex.name,
    driver: HtmlTags.noindex,
  }))
}

// NoScript

export function NoScript<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: NoScript.name,
    driver: HtmlTags.noscript,
  }))
}

// Obj

export function Obj<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLObjectElement, M, D>>): RtNode<El<HTMLObjectElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Obj.name,
    driver: HtmlTags.object,
  }))
}

// OL

export function OL<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLOListElement, M, D>>): RtNode<El<HTMLOListElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: OL.name,
    driver: HtmlTags.ol,
  }))
}

// OptGroup

export function OptGroup<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLOptGroupElement, M, D>>): RtNode<El<HTMLOptGroupElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: OptGroup.name,
    driver: HtmlTags.optgroup,
  }))
}

// Option

export function Option<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLOptionElement, M, D>>): RtNode<El<HTMLOptionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Option.name,
    driver: HtmlTags.option,
  }))
}

// Output

export function Output<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Output.name,
    driver: HtmlTags.output,
  }))
}

// P

export function P<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLParagraphElement, M, D>>): RtNode<El<HTMLParagraphElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: P.name,
    driver: HtmlTags.p,
  }))
}

// Param

export function Param<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Param.name,
    driver: HtmlTags.param,
  }))
}

// Picture

export function Picture<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Picture.name,
    driver: HtmlTags.picture,
  }))
}

// Pre

export function Pre<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLPreElement, M, D>>): RtNode<El<HTMLPreElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Pre.name,
    driver: HtmlTags.pre,
  }))
}

// Progress

export function Progress<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLProgressElement, M, D>>): RtNode<El<HTMLProgressElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Progress.name,
    driver: HtmlTags.progress,
  }))
}

// Q

export function Q<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLQuoteElement, M, D>>): RtNode<El<HTMLQuoteElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Q.name,
    driver: HtmlTags.q,
  }))
}

// RP

export function RP<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: RP.name,
    driver: HtmlTags.rp,
  }))
}

// RT

export function RT<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: RT.name,
    driver: HtmlTags.rt,
  }))
}

// Ruby

export function Ruby<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Ruby.name,
    driver: HtmlTags.ruby,
  }))
}

// S

export function S<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: S.name,
    driver: HtmlTags.s,
  }))
}

// Samp

export function Samp<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Samp.name,
    driver: HtmlTags.samp,
  }))
}

// Script

export function Script<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLScriptElement, M, D>>): RtNode<El<HTMLScriptElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Script.name,
    driver: HtmlTags.script,
  }))
}

// Section

export function Section<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Section.name,
    driver: HtmlTags.section,
  }))
}

// Select

export function Select<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLSelectElement, M, D>>): RtNode<El<HTMLSelectElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Select.name,
    driver: HtmlTags.select,
  }))
}

// Small

export function Small<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Small.name,
    driver: HtmlTags.small,
  }))
}

// Source

export function Source<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLSourceElement, M, D>>): RtNode<El<HTMLSourceElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Source.name,
    driver: HtmlTags.source,
  }))
}

// Span

export function Span<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLSpanElement, M, D>>): RtNode<El<HTMLSpanElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Span.name,
    driver: HtmlTags.span,
  }))
}

// Strong

export function Strong<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Strong.name,
    driver: HtmlTags.strong,
  }))
}

// Style

export function Style<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLStyleElement, M, D>>): RtNode<El<HTMLStyleElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Style.name,
    driver: HtmlTags.style,
  }))
}

// Sub

export function Sub<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Sub.name,
    driver: HtmlTags.sub,
  }))
}

// Summary

export function Summary<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Summary.name,
    driver: HtmlTags.summary,
  }))
}

// Sup

export function Sup<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Sup.name,
    driver: HtmlTags.sup,
  }))
}

// Tbl

export function Tbl<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableElement, M, D>>): RtNode<El<HTMLTableElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Tbl.name,
    driver: HtmlTags.table,
  }))
}

// Template

export function Template<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTemplateElement, M, D>>): RtNode<El<HTMLTemplateElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Template.name,
    driver: HtmlTags.template,
  }))
}

// TBody

export function TBody<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableSectionElement, M, D>>): RtNode<El<HTMLTableSectionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TBody.name,
    driver: HtmlTags.tbody,
  }))
}

// TD

export function TD<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableCellElement, M, D>>): RtNode<El<HTMLTableCellElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TD.name,
    driver: HtmlTags.td,
  }))
}

// TextArea

export function TextArea<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTextAreaElement, M, D>>): RtNode<El<HTMLTextAreaElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TextArea.name,
    driver: HtmlTags.textarea,
  }))
}

// TFoot

export function TFoot<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableSectionElement, M, D>>): RtNode<El<HTMLTableSectionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TFoot.name,
    driver: HtmlTags.tfoot,
  }))
}

// TH

export function TH<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableCellElement, M, D>>): RtNode<El<HTMLTableCellElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TH.name,
    driver: HtmlTags.th,
  }))
}

// THead

export function THead<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableSectionElement, M, D>>): RtNode<El<HTMLTableSectionElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: THead.name,
    driver: HtmlTags.thead,
  }))
}

// Time

export function Time<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Time.name,
    driver: HtmlTags.time,
  }))
}

// Title

export function Title<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTitleElement, M, D>>): RtNode<El<HTMLTitleElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Title.name,
    driver: HtmlTags.title,
  }))
}

// TR

export function TR<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTableRowElement, M, D>>): RtNode<El<HTMLTableRowElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: TR.name,
    driver: HtmlTags.tr,
  }))
}

// Track

export function Track<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLTrackElement, M, D>>): RtNode<El<HTMLTrackElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Track.name,
    driver: HtmlTags.track,
  }))
}

// U

export function U<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: U.name,
    driver: HtmlTags.u,
  }))
}

// UL

export function UL<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLUListElement, M, D>>): RtNode<El<HTMLUListElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: UL.name,
    driver: HtmlTags.ul,
  }))
}

// Var

export function Var<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Var.name,
    driver: HtmlTags.var,
  }))
}

// Video

export function Video<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLVideoElement, M, D>>): RtNode<El<HTMLVideoElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Video.name,
    driver: HtmlTags.video,
  }))
}

// Wbr

export function Wbr<M = unknown, D = unknown>(
  conf?: ConfOrScript<El<HTMLElement, M, D>>): RtNode<El<HTMLElement, M, D>> {
  return RtElement(inherit(conf, {
    caption: Wbr.name,
    driver: HtmlTags.wbr,
  }))
}

const HtmlTags = {
  a: new HtmlDriver<HTMLAnchorElement>("a", false, el => el.kind = ElKind.native),
  abbr: new HtmlDriver<HTMLElement>("abbr", false, el => el.kind = ElKind.native),
  address: new HtmlDriver<HTMLElement>("address", false, el => el.kind = ElKind.native),
  area: new HtmlDriver<HTMLAreaElement>("area", false, el => el.kind = ElKind.native),
  article: new HtmlDriver<HTMLElement>("article", false, el => el.kind = ElKind.native),
  aside: new HtmlDriver<HTMLElement>("aside", false, el => el.kind = ElKind.native),
  audio: new HtmlDriver<HTMLAudioElement>("audio", false, el => el.kind = ElKind.native),
  b: new HtmlDriver<HTMLElement>("b", false, el => el.kind = ElKind.native),
  base: new HtmlDriver<HTMLBaseElement>("base", false, el => el.kind = ElKind.native),
  bdi: new HtmlDriver<HTMLElement>("bdi", false, el => el.kind = ElKind.native),
  bdo: new HtmlDriver<HTMLElement>("bdo", false, el => el.kind = ElKind.native),
  big: new HtmlDriver<HTMLElement>("big", false, el => el.kind = ElKind.native),
  blockquote: new HtmlDriver<HTMLElement>("blockquote", false, el => el.kind = ElKind.native),
  body: new HtmlDriver<HTMLBodyElement>("body", false, el => el.kind = ElKind.native),
  br: new HtmlDriver<HTMLBRElement>("br", false, el => el.kind = ElKind.native),
  button: new HtmlDriver<HTMLButtonElement>("button", false, el => el.kind = ElKind.native),
  canvas: new HtmlDriver<HTMLCanvasElement>("canvas", false, el => el.kind = ElKind.native),
  caption: new HtmlDriver<HTMLTableCaptionElement>("caption", false, el => el.kind = ElKind.native),
  cite: new HtmlDriver<HTMLElement>("cite", false, el => el.kind = ElKind.native),
  code: new HtmlDriver<HTMLElement>("code", false, el => el.kind = ElKind.native),
  col: new HtmlDriver<HTMLTableColElement>("col", false, el => el.kind = ElKind.native),
  colgroup: new HtmlDriver<HTMLTableColElement>("colgroup", false, el => el.kind = ElKind.native),
  data: new HtmlDriver<HTMLDataElement>("data", false, el => el.kind = ElKind.native),
  datalist: new HtmlDriver<HTMLDataListElement>("datalist", false, el => el.kind = ElKind.native),
  dd: new HtmlDriver<HTMLElement>("dd", false, el => el.kind = ElKind.native),
  del: new HtmlDriver<HTMLElement>("del", false, el => el.kind = ElKind.native),
  details: new HtmlDriver<HTMLElement>("details", false, el => el.kind = ElKind.native),
  dfn: new HtmlDriver<HTMLElement>("dfn", false, el => el.kind = ElKind.native),
  div: new HtmlDriver<HTMLDivElement>("div", false, el => el.kind = ElKind.native),
  dl: new HtmlDriver<HTMLDListElement>("dl", false, el => el.kind = ElKind.native),
  dt: new HtmlDriver<HTMLElement>("dt", false, el => el.kind = ElKind.native),
  em: new HtmlDriver<HTMLElement>("em", false, el => el.kind = ElKind.native),
  embed: new HtmlDriver<HTMLEmbedElement>("embed", false, el => el.kind = ElKind.native),
  fieldset: new HtmlDriver<HTMLFieldSetElement>("fieldset", false, el => el.kind = ElKind.native),
  figcaption: new HtmlDriver<HTMLElement>("figcaption", false, el => el.kind = ElKind.native),
  figure: new HtmlDriver<HTMLElement>("figure", false, el => el.kind = ElKind.native),
  footer: new HtmlDriver<HTMLElement>("footer", false, el => el.kind = ElKind.native),
  form: new HtmlDriver<HTMLFormElement>("form", false, el => el.kind = ElKind.native),
  h1: new HtmlDriver<HTMLHeadingElement>("h1", false, el => el.kind = ElKind.native),
  h2: new HtmlDriver<HTMLHeadingElement>("h2", false, el => el.kind = ElKind.native),
  h3: new HtmlDriver<HTMLHeadingElement>("h3", false, el => el.kind = ElKind.native),
  h4: new HtmlDriver<HTMLHeadingElement>("h4", false, el => el.kind = ElKind.native),
  h5: new HtmlDriver<HTMLHeadingElement>("h5", false, el => el.kind = ElKind.native),
  h6: new HtmlDriver<HTMLHeadingElement>("h6", false, el => el.kind = ElKind.native),
  head: new HtmlDriver<HTMLHeadElement>("head", false, el => el.kind = ElKind.native),
  header: new HtmlDriver<HTMLElement>("header", false, el => el.kind = ElKind.native),
  hgroup: new HtmlDriver<HTMLElement>("hgroup", false, el => el.kind = ElKind.native),
  hr: new HtmlDriver<HTMLHRElement>("hr", false, el => el.kind = ElKind.native),
  html: new HtmlDriver<HTMLHtmlElement>("html", false, el => el.kind = ElKind.native),
  i: new HtmlDriver<HTMLElement>("i", false, el => el.kind = ElKind.native),
  iframe: new HtmlDriver<HTMLIFrameElement>("iframe", false, el => el.kind = ElKind.native),
  img: new HtmlDriver<HTMLImageElement>("img", false, el => el.kind = ElKind.native),
  input: new HtmlDriver<HTMLInputElement>("input", false, el => el.kind = ElKind.native),
  ins: new HtmlDriver<HTMLModElement>("ins", false, el => el.kind = ElKind.native),
  kbd: new HtmlDriver<HTMLElement>("kbd", false, el => el.kind = ElKind.native),
  keygen: new HtmlDriver<HTMLElement>("keygen", false, el => el.kind = ElKind.native),
  label: new HtmlDriver<HTMLLabelElement>("label", false, el => el.kind = ElKind.native),
  legend: new HtmlDriver<HTMLLegendElement>("legend", false, el => el.kind = ElKind.native),
  li: new HtmlDriver<HTMLLIElement>("li", false, el => el.kind = ElKind.native),
  link: new HtmlDriver<HTMLLinkElement>("link", false, el => el.kind = ElKind.native),
  main: new HtmlDriver<HTMLElement>("main", false, el => el.kind = ElKind.native),
  map: new HtmlDriver<HTMLMapElement>("map", false, el => el.kind = ElKind.native),
  mark: new HtmlDriver<HTMLElement>("mark", false, el => el.kind = ElKind.native),
  menu: new HtmlDriver<HTMLElement>("menu", false, el => el.kind = ElKind.native),
  menuitem: new HtmlDriver<HTMLElement>("menuitem", false, el => el.kind = ElKind.native),
  meta: new HtmlDriver<HTMLMetaElement>("meta", false, el => el.kind = ElKind.native),
  meter: new HtmlDriver<HTMLElement>("meter", false, el => el.kind = ElKind.native),
  nav: new HtmlDriver<HTMLElement>("nav", false, el => el.kind = ElKind.native),
  noindex: new HtmlDriver<HTMLElement>("noindex", false, el => el.kind = ElKind.native),
  noscript: new HtmlDriver<HTMLElement>("noscript", false, el => el.kind = ElKind.native),
  object: new HtmlDriver<HTMLObjectElement>("object", false, el => el.kind = ElKind.native),
  ol: new HtmlDriver<HTMLOListElement>("ol", false, el => el.kind = ElKind.native),
  optgroup: new HtmlDriver<HTMLOptGroupElement>("optgroup", false, el => el.kind = ElKind.native),
  option: new HtmlDriver<HTMLOptionElement>("option", false, el => el.kind = ElKind.native),
  output: new HtmlDriver<HTMLElement>("output", false, el => el.kind = ElKind.native),
  p: new HtmlDriver<HTMLParagraphElement>("p", false, el => el.kind = ElKind.native),
  param: new HtmlDriver<HTMLElement>("param", false, el => el.kind = ElKind.native),
  picture: new HtmlDriver<HTMLElement>("picture", false, el => el.kind = ElKind.native),
  pre: new HtmlDriver<HTMLPreElement>("pre", false, el => el.kind = ElKind.native),
  progress: new HtmlDriver<HTMLProgressElement>("progress", false, el => el.kind = ElKind.native),
  q: new HtmlDriver<HTMLQuoteElement>("q", false, el => el.kind = ElKind.native),
  rp: new HtmlDriver<HTMLElement>("rp", false, el => el.kind = ElKind.native),
  rt: new HtmlDriver<HTMLElement>("rt", false, el => el.kind = ElKind.native),
  ruby: new HtmlDriver<HTMLElement>("ruby", false, el => el.kind = ElKind.native),
  s: new HtmlDriver<HTMLElement>("s", false, el => el.kind = ElKind.native),
  samp: new HtmlDriver<HTMLElement>("samp", false, el => el.kind = ElKind.native),
  script: new HtmlDriver<HTMLScriptElement>("script", false, el => el.kind = ElKind.native),
  section: new HtmlDriver<HTMLElement>("section", false, el => el.kind = ElKind.native),
  select: new HtmlDriver<HTMLSelectElement>("select", false, el => el.kind = ElKind.native),
  small: new HtmlDriver<HTMLElement>("small", false, el => el.kind = ElKind.native),
  source: new HtmlDriver<HTMLSourceElement>("source", false, el => el.kind = ElKind.native),
  span: new HtmlDriver<HTMLSpanElement>("span", false, el => el.kind = ElKind.native),
  strong: new HtmlDriver<HTMLElement>("strong", false, el => el.kind = ElKind.native),
  style: new HtmlDriver<HTMLStyleElement>("style", false, el => el.kind = ElKind.native),
  sub: new HtmlDriver<HTMLElement>("sub", false, el => el.kind = ElKind.native),
  summary: new HtmlDriver<HTMLElement>("summary", false, el => el.kind = ElKind.native),
  sup: new HtmlDriver<HTMLElement>("sup", false, el => el.kind = ElKind.native),
  table: new HtmlDriver<HTMLTableElement>("table", false, el => el.kind = ElKind.native),
  template: new HtmlDriver<HTMLTemplateElement>("template", false, el => el.kind = ElKind.native),
  tbody: new HtmlDriver<HTMLTableSectionElement>("tbody", false, el => el.kind = ElKind.native),
  td: new HtmlDriver<HTMLTableCellElement>("td", false, el => el.kind = ElKind.native),
  textarea: new HtmlDriver<HTMLTextAreaElement>("textarea", false, el => el.kind = ElKind.native),
  tfoot: new HtmlDriver<HTMLTableSectionElement>("tfoot", false, el => el.kind = ElKind.native),
  th: new HtmlDriver<HTMLTableCellElement>("th", false, el => el.kind = ElKind.native),
  thead: new HtmlDriver<HTMLTableSectionElement>("thead", false, el => el.kind = ElKind.native),
  time: new HtmlDriver<HTMLElement>("time", false, el => el.kind = ElKind.native),
  title: new HtmlDriver<HTMLTitleElement>("title", false, el => el.kind = ElKind.native),
  tr: new HtmlDriver<HTMLTableRowElement>("tr", false, el => el.kind = ElKind.native),
  track: new HtmlDriver<HTMLTrackElement>("track", false, el => el.kind = ElKind.native),
  u: new HtmlDriver<HTMLElement>("u", false, el => el.kind = ElKind.native),
  ul: new HtmlDriver<HTMLUListElement>("ul", false, el => el.kind = ElKind.native),
  var: new HtmlDriver<HTMLElement>("var", false, el => el.kind = ElKind.native),
  video: new HtmlDriver<HTMLVideoElement>("video", false, el => el.kind = ElKind.native),
  wbr: new HtmlDriver<HTMLElement>("wbr", false, el => el.kind = ElKind.native),
  // webview: new HtmlNodeFactory<HTMLWebViewElement>('webview', ElKind.Section),
}
