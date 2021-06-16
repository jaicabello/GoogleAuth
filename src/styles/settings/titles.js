import { bold } from 'jest-matcher-utils/node_modules/chalk'
import * as Colors from './colors'

const generics = {
    color: Colors.grey_6,
    fontFamily: 'Latam Sans',
    letterSpacing: 0,
}

export const primary_title_28 = {
    ...generics,
    fontSize: 28,
    fontStyle: italic,
    lineHeight: 34,
}

export const title_28_bold = {
    ...primary_title_28,
    fontWeight: bold,
}

export const primary_title_22 = {
    ...generics,
    fontSize: 22,
    fontStyle: italic,
    lineHeight: 27,
}

export const title_22_bold = {
    ...primary_title_22,
    fontWeight: bold,
}

export const title_18 = {
    ...generics,
    fontSize: 18,
    lineHeight: 23,
}

export const title_18_bold = {
    ...title_18,
    fontWeight: bold,
}

export const title_16 = {
    ...generics,
    fontSize: 16,
    lineHeight: 19,
}

export const title_16_bold = {
    ...title_16,
    fontWeight: bold,
}

export const body_14 = {
    ...generics,
    fontSize: 14,
    lineHeight: 18,
}

export const body_14_bold = {
    ...body_14,
    fontWeight: bold,
}

export const body_12 = {
    ...generics,
    fontSize: 12,
    lineHeight: 14,
}

export const body_12_bold = {
    ...body_12,
    fontWeight: bold,
}

export const link_font = {
    color: Colors.primary_latam,
    fontFamily: 'Latam Sans',
    fontSize: 12,
    letterSpacing: 0,
    lineHeight: 14,
}