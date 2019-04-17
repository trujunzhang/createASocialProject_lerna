export declare const getThemeStyle: (variables: any) => {
    variables: any;
} & {
    'NativeBase.Left': {
        flex: number;
        alignSelf: string;
        alignItems: string;
    };
    'NativeBase.Right': {
        'NativeBase.Button': {
            alignSelf: null;
        };
        flex: number;
        alignSelf: string;
        alignItems: string;
    };
    'NativeBase.Body': {
        flex: number;
        alignItems: string;
        alignSelf: string;
    };
    'NativeBase.Header': {
        '.span': {
            height: number;
            'NativeBase.Left': {
                alignSelf: string;
            };
            'NativeBase.Body': {
                alignSelf: string;
                alignItems: string;
                justifyContent: string;
                paddingBottom: number;
            };
            'NativeBase.Right': {
                alignSelf: string;
            };
        };
        '.hasSubtitle': {
            'NativeBase.Body': {
                'NativeBase.Title': {
                    fontSize: number;
                    fontFamily: any;
                    textAlign: string;
                    fontWeight: string;
                    paddingBottom: number;
                };
                'NativeBase.Subtitle': {
                    fontSize: any;
                    fontFamily: any;
                    color: any;
                    textAlign: string;
                };
            };
        };
        '.transparent': {
            backgroundColor: string;
            borderBottomColor: string;
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
            paddingTop: number | undefined;
            height: any;
        };
        '.noShadow': {
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
        };
        '.hasTabs': {
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
            borderBottomWidth: null;
        };
        '.hasSegment': {
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
            borderBottomWidth: null;
            'NativeBase.Left': {
                flex: number;
            };
            'NativeBase.Right': {
                flex: number;
            };
            'NativeBase.Body': {
                flex: number;
                'NativeBase.Segment': {
                    marginRight: number;
                    alignSelf: string;
                    'NativeBase.Button': {
                        paddingLeft: number;
                        paddingRight: number;
                    };
                };
            };
        };
        '.noLeft': {
            'NativeBase.Left': {
                width: number | undefined;
                flex: number;
            };
            'NativeBase.Body': {
                'NativeBase.Title': {
                    paddingLeft: number | undefined;
                };
                'NativeBase.Subtitle': {
                    paddingLeft: number | undefined;
                };
            };
        };
        'NativeBase.Button': {
            justifyContent: string;
            alignSelf: string;
            alignItems: string;
            '.transparent': {
                'NativeBase.Text': {
                    color: any;
                    fontWeight: string;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
                paddingHorizontal: any;
            };
            paddingHorizontal: number;
        };
        '.searchBar': {
            'NativeBase.Item': {
                'NativeBase.Icon': {
                    backgroundColor: string;
                    color: any;
                    fontSize: any;
                    alignItems: string;
                    marginTop: number;
                    paddingRight: number;
                    paddingLeft: number;
                };
                'NativeBase.IconNB': {
                    backgroundColor: string;
                    color: null;
                    alignSelf: string;
                };
                'NativeBase.Input': {
                    alignSelf: string;
                    lineHeight: null;
                    height: any;
                };
                alignSelf: string;
                alignItems: string;
                justifyContent: string;
                flex: number;
                height: any;
                borderColor: string;
                backgroundColor: any;
            };
            'NativeBase.Button': {
                '.transparent': {
                    'NativeBase.Text': {
                        fontWeight: string;
                    };
                    paddingHorizontal: null;
                    paddingLeft: number | null;
                };
                paddingHorizontal: null | undefined;
                width: number | undefined;
                height: number | undefined;
            };
        };
        '.rounded': {
            'NativeBase.Item': {
                borderRadius: number;
            };
        };
        'NativeBase.Left': {
            'NativeBase.Button': {
                '.hasText': {
                    marginLeft: number;
                    height: number;
                    'NativeBase.Icon': {
                        color: any;
                        fontSize: any;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                    };
                    'NativeBase.Text': {
                        color: any;
                        fontSize: number;
                        marginLeft: number;
                        lineHeight: number;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                        fontSize: any;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                    };
                };
                '.transparent': {
                    marginLeft: number;
                    'NativeBase.Icon': {
                        color: any;
                        fontSize: any;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                        paddingTop: number;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                        fontSize: any;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                        paddingTop: number;
                    };
                    'NativeBase.Text': {
                        color: any;
                        fontSize: number;
                        top: number;
                        paddingLeft: number;
                        paddingRight: number | undefined;
                    };
                    backgroundColor: string;
                    borderColor: null;
                    elevation: number;
                    shadowColor: null;
                    shadowOffset: null;
                    shadowRadius: null;
                    shadowOpacity: null;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
                alignSelf: null;
                paddingRight: any;
                paddingLeft: number;
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
        };
        'NativeBase.Body': {
            flex: number;
            alignItems: string;
            alignSelf: string;
            'NativeBase.Segment': {
                borderWidth: number;
                alignSelf: string;
                marginRight: number;
            };
            'NativeBase.Button': {
                alignSelf: string;
                '.transparent': {
                    backgroundColor: string;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
                'NativeBase.Text': {
                    color: any;
                    backgroundColor: string;
                };
            };
        };
        'NativeBase.Right': {
            'NativeBase.Button': {
                '.hasText': {
                    height: number;
                    'NativeBase.Icon': {
                        color: any;
                        fontSize: number;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                    };
                    'NativeBase.Text': {
                        color: any;
                        fontSize: number;
                        lineHeight: number;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                        fontSize: number;
                        marginTop: number;
                        marginRight: number;
                        marginLeft: number;
                    };
                };
                '.transparent': {
                    marginRight: number;
                    paddingLeft: number;
                    paddingRight: number;
                    paddingHorizontal: number;
                    borderRadius: number;
                    'NativeBase.Icon': {
                        color: any;
                        fontSize: number;
                        marginTop: number;
                        marginLeft: number;
                        marginRight: number;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                        fontSize: number;
                        marginTop: number;
                        marginLeft: number;
                        marginRight: number;
                    };
                    'NativeBase.Text': {
                        color: any;
                        fontSize: number;
                        top: number;
                        paddingRight: number | undefined;
                    };
                    backgroundColor: string;
                    borderColor: null;
                    elevation: number;
                    shadowColor: null;
                    shadowOffset: null;
                    shadowRadius: null;
                    shadowOpacity: null;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
                alignSelf: null;
                paddingHorizontal: any;
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
            flexDirection: string;
            justifyContent: string;
        };
        backgroundColor: any;
        flexDirection: string;
        paddingLeft: number;
        paddingRight: number;
        justifyContent: string;
        paddingTop: number;
        borderBottomWidth: number;
        borderBottomColor: any;
        height: any;
        elevation: number;
        shadowColor: string | undefined;
        shadowOffset: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity: number | undefined;
        shadowRadius: number | undefined;
        top: number;
        left: number;
        right: number;
    };
    'NativeBase.Button': {
        '.disabled': {
            '.transparent': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            backgroundColor: any;
        };
        '.bordered': {
            borderWidth: number;
            elevation: null;
            shadowColor: null;
            shadowOffset: null;
            shadowOpacity: null;
            shadowRadius: null;
            backgroundColor: string;
            'NativeBase.Text': {
                color: any;
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.dark': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.light': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.primary': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.success': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.info': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.warning': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.danger': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.disabled': {
                backgroundColor: null;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
            };
        };
        '.dark': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.light': {
            backgroundColor: any;
            'NativeBase.Text': {
                color: any;
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.transparent': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
        };
        '.primary': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.success': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.info': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.warning': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.danger': {
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            backgroundColor: any;
        };
        '.block': {
            justifyContent: string;
            alignSelf: string;
        };
        '.full': {
            justifyContent: string;
            alignSelf: string;
            borderRadius: number;
        };
        '.rounded': {
            borderRadius: any;
        };
        '.transparent': {
            '.dark': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.danger': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.warning': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.info': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.primary': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.success': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.light': {
                backgroundColor: null;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            '.disabled': {
                backgroundColor: string;
                borderColor: any;
                borderWidth: number;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            'NativeBase.Text': {
                color: any;
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            backgroundColor: string;
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
        };
        '.small': {
            height: number;
            'NativeBase.Text': {
                fontSize: number;
            };
            'NativeBase.Icon': {
                fontSize: number;
                paddingTop: number;
            };
            'NativeBase.IconNB': {
                fontSize: number;
                paddingTop: number;
            };
        };
        '.large': {
            height: number;
            'NativeBase.Text': {
                fontSize: number;
            };
        };
        '.capitalize': {};
        '.vertical': {
            flexDirection: string;
            height: null;
        };
        'NativeBase.Text': {
            fontFamily: any;
            marginLeft: number;
            marginRight: number;
            color: any;
            fontSize: any;
            paddingHorizontal: number;
            backgroundColor: string;
        };
        'NativeBase.Icon': {
            color: any;
            fontSize: number;
            marginHorizontal: number;
            paddingTop: number | undefined;
        };
        'NativeBase.IconNB': {
            color: any;
            fontSize: number;
            marginHorizontal: number;
            paddingTop: number | undefined;
        };
        '.iconLeft': {
            'NativeBase.Text': {
                marginLeft: number;
            };
            'NativeBase.IconNB': {
                marginRight: number;
                marginLeft: number;
            };
            'NativeBase.Icon': {
                marginRight: number;
                marginLeft: number;
            };
        };
        '.iconRight': {
            'NativeBase.Text': {
                marginRight: number;
            };
            'NativeBase.IconNB': {
                marginLeft: number;
                marginRight: number;
            };
            'NativeBase.Icon': {
                marginLeft: number;
                marginRight: number;
            };
        };
        '.picker': {
            'NativeBase.Text': {
                '.note': {
                    fontSize: number;
                    lineHeight: null;
                };
            };
        };
        paddingVertical: any;
        backgroundColor: any;
        borderRadius: any;
        borderColor: any;
        borderWidth: null;
        height: number;
        alignSelf: string;
        flexDirection: string;
        elevation: number;
        shadowColor: any;
        shadowOffset: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity: number | undefined;
        shadowRadius: number | undefined;
        alignItems: string;
        justifyContent: string;
    };
    'NativeBase.Title': {
        fontSize: any;
        fontFamily: any;
        color: any;
        fontWeight: string | undefined;
        textAlign: string;
        paddingLeft: number;
        marginLeft: number | undefined;
        paddingTop: number;
    };
    'NativeBase.Subtitle': {
        fontSize: any;
        fontFamily: any;
        color: any;
        textAlign: string;
        paddingLeft: number;
        marginLeft: number | undefined;
    };
    'NativeBase.InputGroup': {
        'NativeBase.Icon': {
            fontSize: number;
            color: any;
            paddingHorizontal: number;
        };
        'NativeBase.IconNB': {
            fontSize: number;
            color: any;
            paddingHorizontal: number;
        };
        'NativeBase.Input': {
            height: any;
            color: any;
            paddingLeft: number;
            paddingRight: number;
            flex: number;
            fontSize: any;
            lineHeight: any;
        };
        '.underline': {
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            paddingLeft: number;
            borderWidth: any;
            borderTopWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            borderColor: any;
        };
        '.regular': {
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            paddingLeft: number;
            borderWidth: any;
            borderColor: any;
        };
        '.rounded': {
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            paddingLeft: number;
            borderWidth: any;
            borderRadius: any;
            borderColor: any;
        };
        '.success': {
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.rounded': {
                borderRadius: number;
                borderColor: any;
            };
            '.regular': {
                borderColor: any;
            };
            '.underline': {
                borderWidth: any;
                borderTopWidth: number;
                borderRightWidth: number;
                borderLeftWidth: number;
                borderColor: any;
            };
            borderColor: any;
        };
        '.error': {
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.rounded': {
                borderRadius: number;
                borderColor: any;
            };
            '.regular': {
                borderColor: any;
            };
            '.underline': {
                borderWidth: any;
                borderTopWidth: number;
                borderRightWidth: number;
                borderLeftWidth: number;
                borderColor: any;
            };
            borderColor: any;
        };
        '.disabled': {
            'NativeBase.Icon': {
                color: string;
            };
            'NativeBase.IconNB': {
                color: string;
            };
        };
        paddingLeft: number;
        borderWidth: any;
        borderTopWidth: number;
        borderRightWidth: number;
        borderLeftWidth: number;
        borderColor: any;
        backgroundColor: string;
        flexDirection: string;
        alignItems: string;
    };
    'NativeBase.Input': {
        '.multiline': {
            height: null;
        };
        height: any;
        color: any;
        paddingLeft: number;
        paddingRight: number;
        flex: number;
        fontSize: any;
    };
    'NativeBase.Badge': {
        '.primary': {
            backgroundColor: any;
        };
        '.warning': {
            backgroundColor: any;
        };
        '.info': {
            backgroundColor: any;
        };
        '.success': {
            backgroundColor: any;
        };
        '.danger': {
            backgroundColor: any;
        };
        'NativeBase.Text': {
            color: any;
            fontSize: any;
            lineHeight: number;
            textAlign: string;
            paddingHorizontal: number;
        };
        backgroundColor: any;
        padding: any;
        paddingHorizontal: number;
        alignSelf: string;
        justifyContent: string | undefined;
        borderRadius: number;
        height: number;
    };
    'NativeBase.CheckBox': {
        '.checked': {
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
        };
        'NativeBase.Icon': {
            color: string;
            lineHeight: any;
            marginTop: any;
            fontSize: any;
        };
        'NativeBase.IconNB': {
            color: string;
            lineHeight: any;
            marginTop: any;
            fontSize: any;
        };
        borderRadius: any;
        overflow: string;
        width: any;
        height: any;
        borderWidth: any;
        paddingLeft: number;
        paddingBottom: any;
        left: number;
    };
    'NativeBase.Radio': {
        '.selected': {
            'NativeBase.IconNB': {
                color: any;
                lineHeight: any;
                height: number | undefined;
            };
        };
        'NativeBase.IconNB': {
            color: string | undefined;
            lineHeight: any;
            fontSize: any;
        };
    };
    'NativeBase.Card': {
        '.transparent': {
            shadowColor: null;
            shadowOffset: null;
            shadowOpacity: null;
            shadowRadius: null;
            elevation: null;
            backgroundColor: string;
            borderWidth: number;
        };
        '.noShadow': {
            shadowColor: null;
            shadowOffset: null;
            shadowOpacity: null;
            elevation: null;
        };
        marginVertical: number;
        marginHorizontal: number;
        borderWidth: any;
        borderRadius: any;
        borderColor: any;
        flexWrap: string;
        backgroundColor: any;
        shadowColor: string;
        shadowOffset: {
            width: number;
            height: number;
        };
        shadowOpacity: number;
        shadowRadius: number;
        elevation: number;
    };
    'NativeBase.CardItem': {
        'NativeBase.Left': {
            'NativeBase.Body': {
                'NativeBase.Text': {
                    '.note': {
                        color: any;
                        fontWeight: string;
                        marginRight: number;
                    };
                };
                flex: number;
                marginLeft: number;
                alignItems: null;
            };
            'NativeBase.Icon': {
                fontSize: any;
            };
            'NativeBase.IconNB': {
                fontSize: any;
            };
            'NativeBase.Text': {
                marginLeft: number;
                alignSelf: string;
            };
            'NativeBase.Button': {
                '.transparent': {
                    paddingRight: any;
                    'NativeBase.Text': {
                        fontSize: number;
                        color: any;
                    };
                    'NativeBase.Icon': {
                        fontSize: number;
                        color: any;
                        marginHorizontal: null;
                    };
                    'NativeBase.IconNB': {
                        fontSize: number;
                        color: any;
                    };
                    paddingVertical: null;
                    paddingHorizontal: null;
                };
            };
            flex: number;
            flexDirection: string;
            alignItems: string;
        };
        '.content': {
            'NativeBase.Text': {
                color: string;
                fontSize: number;
            };
        };
        '.cardBody': {
            padding: number;
            'NativeBase.Text': {
                marginTop: number;
            };
        };
        'NativeBase.Body': {
            'NativeBase.Text': {
                '.note': {
                    color: any;
                    fontWeight: string;
                    marginRight: number;
                };
            };
            'NativeBase.Button': {
                '.transparent': {
                    paddingRight: any;
                    alignSelf: string;
                    'NativeBase.Text': {
                        fontSize: number;
                        color: any;
                    };
                    'NativeBase.Icon': {
                        fontSize: number;
                        color: any;
                        marginHorizontal: null;
                    };
                    'NativeBase.IconNB': {
                        fontSize: number;
                        color: any;
                    };
                    paddingVertical: null;
                    paddingHorizontal: null;
                };
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
        };
        'NativeBase.Right': {
            'NativeBase.Badge': {
                alignSelf: null;
            };
            'NativeBase.Button': {
                '.transparent': {
                    'NativeBase.Text': {
                        fontSize: number;
                        color: any;
                    };
                    'NativeBase.Icon': {
                        fontSize: number;
                        color: any;
                        marginHorizontal: null;
                    };
                    'NativeBase.IconNB': {
                        fontSize: number;
                        color: any;
                    };
                    paddingVertical: null;
                    paddingHorizontal: null;
                };
                alignSelf: null;
            };
            'NativeBase.Icon': {
                alignSelf: null;
                fontSize: number;
                color: any;
            };
            'NativeBase.IconNB': {
                alignSelf: null;
                fontSize: number;
                color: any;
            };
            'NativeBase.Text': {
                fontSize: number;
                alignSelf: null;
            };
            'NativeBase.Thumbnail': {
                alignSelf: null;
            };
            'NativeBase.Image': {
                alignSelf: null;
            };
            'NativeBase.Radio': {
                alignSelf: null;
            };
            'NativeBase.Checkbox': {
                alignSelf: null;
            };
            'NativeBase.Switch': {
                alignSelf: null;
            };
            flex: number;
        };
        '.header': {
            'NativeBase.Text': {
                fontSize: number;
                fontWeight: string;
            };
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                    fontWeight: string;
                };
                borderBottomWidth: any;
            };
            borderBottomWidth: null;
            paddingVertical: any;
        };
        '.footer': {
            'NativeBase.Text': {
                fontSize: number;
                fontWeight: string;
            };
            '.bordered': {
                'NativeBase.Text': {
                    color: any;
                    fontWeight: string;
                };
                borderTopWidth: any;
            };
            borderBottomWidth: null;
        };
        'NativeBase.Text': {
            '.note': {
                color: any;
                fontWeight: string;
            };
        };
        'NativeBase.Icon': {
            width: any;
            fontSize: number;
        };
        'NativeBase.IconNB': {
            width: any;
            fontSize: number;
        };
        '.bordered': {
            borderBottomWidth: number;
            borderColor: any;
        };
        '.first': {
            borderTopLeftRadius: any;
            borderTopRightRadius: any;
        };
        '.last': {
            borderBottomLeftRadius: any;
            borderBottomRightRadius: any;
        };
        flexDirection: string;
        alignItems: string;
        borderRadius: any;
        padding: any;
        paddingVertical: any;
        backgroundColor: any;
    };
    'NativeBase.Toast': {
        '.danger': {
            backgroundColor: any;
        };
        '.warning': {
            backgroundColor: any;
        };
        '.success': {
            backgroundColor: any;
        };
        backgroundColor: string;
        borderRadius: number;
        flexDirection: string;
        justifyContent: string;
        alignItems: string;
        padding: number;
        minHeight: number;
        'NativeBase.Text': {
            color: string;
            flex: number;
        };
        'NativeBase.Button': {
            backgroundColor: string;
            height: number;
            elevation: number;
            'NativeBase.Text': {
                fontSize: number;
            };
        };
    };
    'NativeBase.H1': {
        color: any;
        fontSize: any;
        lineHeight: any;
    };
    'NativeBase.H2': {
        color: any;
        fontSize: any;
        lineHeight: any;
    };
    'NativeBase.H3': {
        color: any;
        fontSize: any;
        lineHeight: any;
    };
    'NativeBase.Form': {
        'NativeBase.Item': {
            '.fixedLabel': {
                'NativeBase.Label': {
                    paddingLeft: null;
                };
                marginLeft: number;
            };
            '.inlineLabel': {
                'NativeBase.Label': {
                    paddingLeft: null;
                };
                marginLeft: number;
            };
            '.placeholderLabel': {
                'NativeBase.Input': {};
            };
            '.stackedLabel': {
                'NativeBase.Label': {
                    top: number;
                    paddingLeft: null;
                };
                'NativeBase.Input': {
                    paddingLeft: null;
                    marginLeft: null;
                };
                'NativeBase.Icon': {
                    marginTop: number;
                };
                marginLeft: number;
            };
            '.floatingLabel': {
                'NativeBase.Input': {
                    paddingLeft: null;
                    top: number;
                    marginLeft: null;
                };
                'NativeBase.Label': {
                    left: number;
                    top: number;
                };
                'NativeBase.Icon': {
                    top: number;
                };
                marginTop: number;
                marginLeft: number;
            };
            '.regular': {
                'NativeBase.Label': {
                    left: number;
                };
                marginLeft: number;
            };
            '.rounded': {
                'NativeBase.Label': {
                    left: number;
                };
                marginLeft: number;
            };
            '.underline': {
                'NativeBase.Label': {
                    left: number;
                    top: number;
                    position: string;
                };
                'NativeBase.Input': {
                    left: number;
                };
                marginLeft: number;
            };
            '.last': {
                marginLeft: number;
                paddingLeft: number;
            };
            'NativeBase.Label': {
                paddingRight: number;
            };
            marginLeft: number;
        };
    };
    'NativeBase.Container': {
        flex: number;
        height: number;
        backgroundColor: any;
    };
    'NativeBase.Content': {
        flex: number;
        backgroundColor: string;
        'NativeBase.Segment': {
            borderWidth: number;
            backgroundColor: string;
        };
    };
    'NativeBase.Footer': {
        'NativeBase.Left': {
            'NativeBase.Button': {
                'NativeBase.IconNB': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                '.transparent': {
                    'NativeBase.Text': {
                        color: any;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                    };
                    'NativeBase.Icon': {
                        color: any;
                    };
                    backgroundColor: string;
                    borderColor: null;
                    elevation: number;
                    shadowColor: null;
                    shadowOffset: null;
                    shadowRadius: null;
                    shadowOpacity: null;
                };
                alignSelf: null;
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
        };
        'NativeBase.Body': {
            flex: number;
            alignItems: string;
            alignSelf: string;
            flexDirection: string;
            'NativeBase.Button': {
                'NativeBase.IconNB': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                alignSelf: string;
                '.transparent': {
                    'NativeBase.Text': {
                        color: any;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                    };
                    'NativeBase.Icon': {
                        color: any;
                    };
                    backgroundColor: string;
                    borderColor: null;
                    elevation: number;
                    shadowColor: null;
                    shadowOffset: null;
                    shadowRadius: null;
                    shadowOpacity: null;
                };
                '.full': {
                    height: any;
                    paddingBottom: any;
                    flex: number;
                };
            };
        };
        'NativeBase.Right': {
            'NativeBase.Button': {
                'NativeBase.IconNB': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                '.transparent': {
                    'NativeBase.Text': {
                        color: any;
                    };
                    'NativeBase.IconNB': {
                        color: any;
                    };
                    'NativeBase.Icon': {
                        color: any;
                    };
                    backgroundColor: string;
                    borderColor: null;
                    elevation: number;
                    shadowColor: null;
                    shadowOffset: null;
                    shadowRadius: null;
                    shadowOpacity: null;
                };
                alignSelf: null;
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
        };
        backgroundColor: any;
        flexDirection: string;
        justifyContent: string;
        borderTopWidth: any;
        borderColor: string | undefined;
        height: any;
        paddingBottom: any;
        elevation: number;
        left: number;
        right: number;
    };
    'NativeBase.Tabs': {
        flex: number;
    };
    'NativeBase.FooterTab': {
        'NativeBase.Button': {
            '.active': {
                'NativeBase.Text': {
                    color: any;
                    fontSize: any;
                    lineHeight: number;
                };
                'NativeBase.Icon': {
                    color: any;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
                backgroundColor: any;
            };
            flexDirection: null;
            backgroundColor: string;
            borderColor: null;
            elevation: number;
            shadowColor: null;
            shadowOffset: null;
            shadowRadius: null;
            shadowOpacity: null;
            alignSelf: string;
            flex: number;
            height: any;
            justifyContent: string;
            '.badge': {
                'NativeBase.Badge': {
                    'NativeBase.Text': {
                        fontSize: number;
                        fontWeight: string | undefined;
                        lineHeight: number;
                    };
                    top: number;
                    alignSelf: string;
                    left: number;
                    zIndex: number;
                    height: number;
                    padding: number;
                    paddingHorizontal: number;
                };
                'NativeBase.Icon': {
                    marginTop: number;
                };
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            'NativeBase.Text': {
                color: any;
                fontSize: any;
                lineHeight: number;
            };
        };
        backgroundColor: any;
        flexDirection: string;
        justifyContent: string;
        flex: number;
        alignSelf: string;
    };
    'NativeBase.ListItem': {
        'NativeBase.InputGroup': {
            'NativeBase.Icon': {
                paddingRight: number;
            };
            'NativeBase.IconNB': {
                paddingRight: number;
            };
            'NativeBase.Input': {
                paddingHorizontal: number;
            };
            flex: number;
            borderWidth: null;
            margin: number;
            borderBottomColor: string;
        };
        '.searchBar': {
            'NativeBase.Item': {
                'NativeBase.Icon': {
                    backgroundColor: string;
                    color: any;
                    fontSize: number;
                    alignItems: string;
                    marginTop: number;
                    paddingRight: number;
                };
                'NativeBase.IconNB': {
                    backgroundColor: string;
                    color: null;
                    alignSelf: string;
                };
                'NativeBase.Input': {
                    alignSelf: string;
                };
                alignSelf: string;
                alignItems: string;
                justifyContent: string;
                flex: number;
                height: number;
                borderColor: string;
                backgroundColor: string;
                borderRadius: number;
            };
            'NativeBase.Button': {
                '.transparent': {
                    'NativeBase.Text': {
                        fontWeight: string;
                    };
                    paddingHorizontal: null;
                    paddingLeft: number | null;
                };
                paddingHorizontal: null | undefined;
                width: number | undefined;
                height: number | undefined;
            };
            backgroundColor: any;
            padding: number;
            marginLeft: null;
        };
        'NativeBase.CheckBox': {
            marginLeft: number;
            marginRight: number;
        };
        '.first': {
            '.itemHeader': {
                paddingTop: any;
            };
        };
        '.itemHeader': {
            '.first': {
                paddingTop: any;
            };
            borderBottomWidth: any;
            marginLeft: null;
            padding: any;
            paddingLeft: any;
            paddingTop: any;
            paddingBottom: any;
            flexDirection: string;
            borderColor: any;
            'NativeBase.Text': {
                fontSize: number;
                color: any;
            };
        };
        '.itemDivider': {
            borderBottomWidth: null;
            marginLeft: null;
            padding: any;
            paddingLeft: any;
            backgroundColor: any;
            flexDirection: string;
            borderColor: any;
        };
        '.selected': {
            'NativeBase.Text': {
                color: any;
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.Left': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
        };
        'NativeBase.Left': {
            'NativeBase.Body': {
                'NativeBase.Text': {
                    '.note': {
                        color: any;
                        fontWeight: string;
                    };
                    fontWeight: string;
                };
                marginLeft: number;
                alignItems: null;
                alignSelf: null;
            };
            'NativeBase.Icon': {
                width: number;
                fontSize: number;
            };
            'NativeBase.IconNB': {
                width: number;
                fontSize: number;
            };
            'NativeBase.Text': {
                alignSelf: string;
            };
            flexDirection: string;
        };
        'NativeBase.Body': {
            'NativeBase.Text': {
                marginHorizontal: any;
                '.note': {
                    color: any;
                    fontWeight: string;
                };
            };
            alignSelf: null;
            alignItems: null;
        };
        'NativeBase.Right': {
            'NativeBase.Badge': {
                alignSelf: null;
            };
            'NativeBase.PickerNB': {
                'NativeBase.Button': {
                    marginRight: number;
                    'NativeBase.Text': {
                        color: any;
                    };
                };
            };
            'NativeBase.Button': {
                alignSelf: null;
                '.transparent': {
                    'NativeBase.Text': {
                        color: any;
                    };
                };
            };
            'NativeBase.Icon': {
                alignSelf: null;
                fontSize: number;
                color: string;
            };
            'NativeBase.IconNB': {
                alignSelf: null;
                fontSize: number;
                color: string;
            };
            'NativeBase.Text': {
                '.note': {
                    color: any;
                    fontWeight: string;
                };
                alignSelf: null;
            };
            'NativeBase.Thumbnail': {
                alignSelf: null;
            };
            'NativeBase.Image': {
                alignSelf: null;
            };
            'NativeBase.Radio': {
                alignSelf: null;
            };
            'NativeBase.Checkbox': {
                alignSelf: null;
            };
            'NativeBase.Switch': {
                alignSelf: null;
            };
            padding: null;
            flex: number;
        };
        'NativeBase.Text': {
            '.note': {
                color: any;
                fontWeight: string;
            };
            alignSelf: string;
        };
        '.last': {
            marginLeft: number;
            paddingLeft: number;
            top: number;
        };
        '.avatar': {
            'NativeBase.Left': {
                flex: number;
                alignSelf: string;
                paddingTop: number;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                };
                flex: number;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
                marginLeft: any;
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    '.note': {
                        fontSize: number;
                    };
                };
                flex: number;
                paddingRight: any;
                alignSelf: string;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
        };
        '.thumbnail': {
            'NativeBase.Left': {
                flex: number;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                };
                flex: number;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
                marginLeft: any;
            };
            'NativeBase.Right': {
                'NativeBase.Button': {
                    '.transparent': {
                        'NativeBase.Text': {
                            fontSize: any;
                            color: any;
                        };
                    };
                    height: null;
                };
                flex: number;
                justifyContent: string;
                alignSelf: string;
                paddingRight: any;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
        };
        '.icon': {
            '.last': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
                borderBottomWidth: any;
                borderColor: any;
            };
            'NativeBase.Left': {
                'NativeBase.Button': {
                    'NativeBase.IconNB': {
                        marginHorizontal: null;
                        fontSize: number;
                    };
                    'NativeBase.Icon': {
                        marginHorizontal: null;
                        fontSize: number;
                    };
                    alignSelf: string;
                    height: number;
                    width: number;
                    borderRadius: number;
                    paddingVertical: null;
                    paddingHorizontal: null;
                    alignItems: string;
                    justifyContent: string;
                };
                'NativeBase.Icon': {
                    width: number;
                    fontSize: number;
                };
                'NativeBase.IconNB': {
                    width: number;
                    fontSize: number;
                };
                paddingRight: any;
                flex: number;
                height: number;
                justifyContent: string;
                alignItems: string;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                    fontSize: number;
                };
                flex: number;
                height: number;
                justifyContent: string;
                borderBottomWidth: number;
                borderColor: any;
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    textAlign: string;
                    color: string;
                    fontSize: number;
                };
                'NativeBase.IconNB': {
                    color: string;
                    fontSize: number;
                    alignSelf: string;
                    paddingLeft: number;
                    paddingTop: number;
                };
                'NativeBase.Icon': {
                    color: string;
                    fontSize: number;
                    alignSelf: string;
                    paddingLeft: number;
                    paddingTop: number;
                };
                'NativeBase.Switch': {
                    marginRight: number | undefined;
                    alignSelf: null;
                };
                'NativeBase.PickerNB': {
                    '.note': {
                        color: string;
                    };
                    marginRight: number;
                    flexGrow: number;
                };
                flexDirection: string;
                alignItems: string;
                flex: number;
                alignSelf: string;
                height: number;
                justifyContent: string;
                borderBottomWidth: number;
                borderColor: any;
                paddingRight: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
            height: number;
            justifyContent: string;
        };
        '.noBorder': {
            borderBottomWidth: null;
        };
        '.noIndent': {
            marginLeft: null;
            padding: any;
            paddingLeft: any;
        };
        alignItems: string;
        flexDirection: string;
        paddingRight: any;
        paddingVertical: any;
        marginLeft: any;
        borderBottomWidth: number;
        backgroundColor: any;
        borderColor: any;
    };
    'NativeBase.ListItem1': {
        'NativeBase.InputGroup': {
            'NativeBase.Icon': {
                paddingRight: number;
            };
            'NativeBase.IconNB': {
                paddingRight: number;
            };
            'NativeBase.Input': {
                paddingHorizontal: number;
            };
            flex: number;
            borderWidth: null;
            margin: number;
            borderBottomColor: string;
        };
        '.searchBar': {
            'NativeBase.Item': {
                'NativeBase.Icon': {
                    backgroundColor: string;
                    color: any;
                    fontSize: number;
                    alignItems: string;
                    marginTop: number;
                    paddingRight: number;
                };
                'NativeBase.IconNB': {
                    backgroundColor: string;
                    color: null;
                    alignSelf: string;
                };
                'NativeBase.Input': {
                    alignSelf: string;
                };
                alignSelf: string;
                alignItems: string;
                justifyContent: string;
                flex: number;
                height: number;
                borderColor: string;
                backgroundColor: string;
                borderRadius: number;
            };
            'NativeBase.Button': {
                '.transparent': {
                    'NativeBase.Text': {
                        fontWeight: string;
                    };
                    paddingHorizontal: null;
                    paddingLeft: number | null;
                };
                paddingHorizontal: null | undefined;
                width: number | undefined;
                height: number | undefined;
            };
            backgroundColor: any;
            padding: number;
            marginLeft: null;
        };
        'NativeBase.CheckBox': {
            marginLeft: number;
            marginRight: number;
        };
        '.first': {
            '.itemHeader': {
                paddingTop: any;
            };
        };
        '.itemHeader': {
            '.first': {
                paddingTop: any;
            };
            borderBottomWidth: any;
            marginLeft: null;
            padding: any;
            paddingLeft: any;
            paddingTop: any;
            paddingBottom: any;
            flexDirection: string;
            borderColor: any;
            'NativeBase.Text': {
                fontSize: number;
                color: any;
            };
        };
        '.itemDivider': {
            borderBottomWidth: null;
            marginLeft: null;
            padding: any;
            paddingLeft: any;
            backgroundColor: any;
            flexDirection: string;
            borderColor: any;
        };
        '.selected': {
            'NativeBase.Text': {
                color: any;
            };
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.Left': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
        };
        'NativeBase.Left': {
            'NativeBase.Body': {
                'NativeBase.Text': {
                    '.note': {
                        color: any;
                        fontWeight: string;
                    };
                    fontWeight: string;
                };
                marginLeft: number;
                alignItems: null;
                alignSelf: null;
            };
            'NativeBase.Icon': {
                width: number;
                fontSize: number;
            };
            'NativeBase.IconNB': {
                width: number;
                fontSize: number;
            };
            'NativeBase.Text': {
                alignSelf: string;
            };
            flexDirection: string;
        };
        'NativeBase.Body': {
            'NativeBase.Text': {
                marginHorizontal: any;
                '.note': {
                    color: any;
                    fontWeight: string;
                };
            };
            alignSelf: null;
            alignItems: null;
        };
        'NativeBase.Right': {
            'NativeBase.Badge': {
                alignSelf: null;
            };
            'NativeBase.PickerNB': {
                'NativeBase.Button': {
                    marginRight: number;
                    'NativeBase.Text': {
                        color: any;
                    };
                };
            };
            'NativeBase.Button': {
                alignSelf: null;
                '.transparent': {
                    'NativeBase.Text': {
                        color: any;
                    };
                };
            };
            'NativeBase.Icon': {
                alignSelf: null;
                fontSize: number;
                color: string;
            };
            'NativeBase.IconNB': {
                alignSelf: null;
                fontSize: number;
                color: string;
            };
            'NativeBase.Text': {
                '.note': {
                    color: any;
                    fontWeight: string;
                };
                alignSelf: null;
            };
            'NativeBase.Thumbnail': {
                alignSelf: null;
            };
            'NativeBase.Image': {
                alignSelf: null;
            };
            'NativeBase.Radio': {
                alignSelf: null;
            };
            'NativeBase.Checkbox': {
                alignSelf: null;
            };
            'NativeBase.Switch': {
                alignSelf: null;
            };
            padding: null;
            flex: number;
        };
        'NativeBase.Text': {
            '.note': {
                color: any;
                fontWeight: string;
            };
            alignSelf: string;
        };
        '.last': {
            marginLeft: number;
            paddingLeft: number;
            top: number;
        };
        '.avatar': {
            'NativeBase.Left': {
                flex: number;
                alignSelf: string;
                paddingTop: number;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                };
                flex: number;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
                marginLeft: any;
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    '.note': {
                        fontSize: number;
                    };
                };
                flex: number;
                paddingRight: any;
                alignSelf: string;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
        };
        '.thumbnail': {
            'NativeBase.Left': {
                flex: number;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                };
                flex: number;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
                marginLeft: any;
            };
            'NativeBase.Right': {
                'NativeBase.Button': {
                    '.transparent': {
                        'NativeBase.Text': {
                            fontSize: any;
                            color: any;
                        };
                    };
                    height: null;
                };
                flex: number;
                justifyContent: string;
                alignSelf: string;
                paddingRight: any;
                paddingVertical: any;
                borderBottomWidth: any;
                borderColor: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
        };
        '.icon': {
            '.last': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
                borderBottomWidth: any;
                borderColor: any;
            };
            'NativeBase.Left': {
                'NativeBase.Button': {
                    'NativeBase.IconNB': {
                        marginHorizontal: null;
                        fontSize: number;
                    };
                    'NativeBase.Icon': {
                        marginHorizontal: null;
                        fontSize: number;
                    };
                    alignSelf: string;
                    height: number;
                    width: number;
                    borderRadius: number;
                    paddingVertical: null;
                    paddingHorizontal: null;
                    alignItems: string;
                    justifyContent: string;
                };
                'NativeBase.Icon': {
                    width: number;
                    fontSize: number;
                };
                'NativeBase.IconNB': {
                    width: number;
                    fontSize: number;
                };
                paddingRight: any;
                flex: number;
                height: number;
                justifyContent: string;
                alignItems: string;
            };
            'NativeBase.Body': {
                'NativeBase.Text': {
                    marginLeft: null;
                    fontSize: number;
                };
                flex: number;
                height: number;
                justifyContent: string;
                borderBottomWidth: number;
                borderColor: any;
            };
            'NativeBase.Right': {
                'NativeBase.Text': {
                    textAlign: string;
                    color: string;
                    fontSize: number;
                };
                'NativeBase.IconNB': {
                    color: string;
                    fontSize: number;
                    alignSelf: string;
                    paddingLeft: number;
                    paddingTop: number;
                };
                'NativeBase.Icon': {
                    color: string;
                    fontSize: number;
                    alignSelf: string;
                    paddingLeft: number;
                    paddingTop: number;
                };
                'NativeBase.Switch': {
                    marginRight: number | undefined;
                    alignSelf: null;
                };
                'NativeBase.PickerNB': {
                    '.note': {
                        color: string;
                    };
                    marginRight: number;
                    flexGrow: number;
                };
                flexDirection: string;
                alignItems: string;
                flex: number;
                alignSelf: string;
                height: number;
                justifyContent: string;
                borderBottomWidth: number;
                borderColor: any;
                paddingRight: any;
            };
            '.noBorder': {
                'NativeBase.Body': {
                    borderBottomWidth: null;
                };
                'NativeBase.Right': {
                    borderBottomWidth: null;
                };
            };
            borderBottomWidth: null;
            paddingVertical: null;
            paddingRight: null;
            height: number;
            justifyContent: string;
        };
        '.noBorder': {
            borderBottomWidth: null;
        };
        '.noIndent': {
            marginLeft: null;
            padding: any;
            paddingLeft: any;
        };
        alignItems: string;
        flexDirection: string;
        paddingRight: any;
        paddingVertical: any;
        marginLeft: any;
        borderBottomWidth: number;
        backgroundColor: any;
        borderColor: any;
    };
    'NativeBase.Icon': {
        fontSize: any;
        color: string;
    };
    'NativeBase.IconNB': {
        fontSize: any;
        color: string;
    };
    'NativeBase.Text': {
        fontSize: any;
        fontFamily: any;
        color: any;
        '.note': {
            color: string;
            fontSize: any;
        };
    };
    'NativeBase.Spinner': {
        height: number;
    };
    'NativeBase.Fab': {
        'NativeBase.Button': {
            alignItems: string;
            padding: null;
            justifyContent: string;
            'NativeBase.Icon': {
                alignSelf: string;
                fontSize: number;
                marginLeft: number;
                marginRight: number;
            };
            'NativeBase.IconNB': {
                alignSelf: string;
                fontSize: number;
                marginLeft: number;
                marginRight: number;
            };
        };
    };
    'NativeBase.Item': {
        '.floatingLabel': {
            'NativeBase.Input': {
                height: number;
                top: number;
                paddingTop: number;
                paddingBottom: number;
                '.multiline': {
                    minHeight: any;
                    paddingTop: number;
                    paddingBottom: number;
                };
            };
            'NativeBase.Label': {
                paddingTop: number;
            };
            'NativeBase.Icon': {
                top: number;
                paddingTop: number;
            };
            'NativeBase.IconNB': {
                top: number;
                paddingTop: number;
            };
        };
        '.fixedLabel': {
            'NativeBase.Label': {
                position: null;
                top: null;
                left: null;
                right: null;
                flex: number;
                height: null;
                width: null;
                fontSize: any;
            };
            'NativeBase.Input': {
                flex: number;
                fontSize: any;
            };
        };
        '.stackedLabel': {
            'NativeBase.Label': {
                position: null;
                top: null;
                left: null;
                right: null;
                paddingTop: number;
                alignSelf: string;
                fontSize: number;
            };
            'NativeBase.Icon': {
                marginTop: number;
            };
            'NativeBase.Input': {
                alignSelf: string;
                flex: number;
                width: number | null;
                fontSize: any;
                lineHeight: number;
                '.secureTextEntry': {
                    fontSize: number;
                };
                '.multiline': {
                    paddingTop: number | undefined;
                    paddingBottom: number | undefined;
                };
            };
            flexDirection: null;
            minHeight: any;
        };
        '.inlineLabel': {
            'NativeBase.Label': {
                position: null;
                top: null;
                left: null;
                right: null;
                paddingRight: number;
                height: null;
                width: null;
                fontSize: any;
            };
            'NativeBase.Input': {
                paddingLeft: number;
                fontSize: any;
            };
            flexDirection: string;
        };
        'NativeBase.Label': {
            fontSize: any;
            color: any;
            paddingRight: number;
        };
        'NativeBase.Icon': {
            fontSize: number;
            paddingRight: number;
        };
        'NativeBase.IconNB': {
            fontSize: number;
            paddingRight: number;
        };
        'NativeBase.Input': {
            '.multiline': {
                height: null;
            };
            height: any;
            color: any;
            flex: number;
            top: number | undefined;
            fontSize: any;
        };
        '.underline': {
            'NativeBase.Input': {
                paddingLeft: number;
            };
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            borderWidth: number;
            borderTopWidth: number;
            borderRightWidth: number;
            borderLeftWidth: number;
            borderColor: any;
        };
        '.regular': {
            'NativeBase.Input': {
                paddingLeft: number;
            };
            'NativeBase.Icon': {
                paddingLeft: number;
            };
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            borderWidth: number;
            borderColor: any;
        };
        '.rounded': {
            'NativeBase.Input': {
                paddingLeft: number;
            };
            'NativeBase.Icon': {
                paddingLeft: number;
            };
            '.success': {
                borderColor: any;
            };
            '.error': {
                borderColor: any;
            };
            borderWidth: number;
            borderRadius: number;
            borderColor: any;
        };
        '.success': {
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.rounded': {
                borderRadius: number;
                borderColor: any;
            };
            '.regular': {
                borderColor: any;
            };
            '.underline': {
                borderWidth: number;
                borderTopWidth: number;
                borderRightWidth: number;
                borderLeftWidth: number;
                borderColor: any;
            };
            borderColor: any;
        };
        '.error': {
            'NativeBase.Icon': {
                color: any;
            };
            'NativeBase.IconNB': {
                color: any;
            };
            '.rounded': {
                borderRadius: number;
                borderColor: any;
            };
            '.regular': {
                borderColor: any;
            };
            '.underline': {
                borderWidth: number;
                borderTopWidth: number;
                borderRightWidth: number;
                borderLeftWidth: number;
                borderColor: any;
            };
            borderColor: any;
        };
        '.disabled': {
            'NativeBase.Icon': {
                color: string;
            };
            'NativeBase.IconNB': {
                color: string;
            };
        };
        '.picker': {
            marginLeft: number;
        };
        borderWidth: number;
        borderTopWidth: number;
        borderRightWidth: number;
        borderLeftWidth: number;
        borderColor: any;
        backgroundColor: string;
        flexDirection: string;
        alignItems: string;
        marginLeft: number;
    };
    'NativeBase.Label': {
        '.focused': {
            width: number;
        };
        fontSize: number;
    };
    'NativeBase.Textarea': {
        '.underline': {
            borderBottomWidth: any;
            marginTop: number;
            borderColor: any;
        };
        '.bordered': {
            borderWidth: number;
            marginTop: number;
            borderColor: any;
        };
        color: any;
        paddingLeft: number;
        paddingRight: number;
        fontSize: number;
        textAlignVertical: string;
    };
    'NativeBase.PickerNB': {
        'NativeBase.Button': {
            'NativeBase.Text': {};
        };
        '.note': {
            color: string;
        };
        marginRight: number;
        flexGrow: number;
    };
    'NativeBase.Tab': {
        flex: number;
        backgroundColor: string;
    };
    'NativeBase.Segment': {
        height: number;
        borderColor: any;
        flexDirection: string;
        justifyContent: string;
        backgroundColor: any;
        'NativeBase.Button': {
            alignSelf: string;
            borderRadius: number;
            paddingTop: number;
            paddingBottom: number;
            height: number;
            backgroundColor: string;
            borderWidth: number;
            borderLeftWidth: number;
            borderColor: any;
            elevation: number;
            '.active': {
                backgroundColor: any;
                'NativeBase.Text': {
                    color: any;
                };
                'NativeBase.Icon': {
                    color: any;
                };
            };
            '.first': {
                borderTopLeftRadius: number | undefined;
                borderBottomLeftRadius: number | undefined;
                borderLeftWidth: number;
            };
            '.last': {
                borderTopRightRadius: number | undefined;
                borderBottomRightRadius: number | undefined;
            };
            'NativeBase.Text': {
                color: any;
                fontSize: number;
            };
            'NativeBase.Icon': {
                fontSize: number;
                paddingTop: number;
                color: any;
            };
        };
    };
    'NativeBase.TabBar': {
        '.tabIcon': {
            height: undefined;
        };
        '.vertical': {
            height: number;
        };
        'NativeBase.Button': {
            '.transparent': {
                'NativeBase.Text': {
                    fontSize: any;
                    color: any;
                    fontWeight: string;
                };
                'NativeBase.IconNB': {
                    color: any;
                };
            };
            'NativeBase.IconNB': {
                color: any;
            };
            'NativeBase.Text': {
                fontSize: any;
                color: any;
                fontWeight: string;
            };
            '.isTabActive': {
                'NativeBase.Text': {
                    fontWeight: string;
                };
            };
            flex: number;
            alignSelf: string;
            alignItems: string;
            justifyContent: string;
            borderRadius: null;
            borderBottomColor: string;
            backgroundColor: any;
        };
        height: number;
        flexDirection: string;
        justifyContent: string;
        borderWidth: number;
        borderTopWidth: number;
        borderLeftWidth: number;
        borderRightWidth: number;
        borderBottomColor: string;
        backgroundColor: any;
    };
    'NativeBase.ViewNB': {
        '.padder': {
            padding: any;
        };
    };
    'NativeBase.TabHeading': {
        flexDirection: string;
        backgroundColor: any;
        flex: number;
        alignItems: string;
        justifyContent: string;
        '.scrollable': {
            paddingHorizontal: number;
            flex: number;
            minWidth: number | undefined;
        };
        'NativeBase.Text': {
            color: any;
            marginHorizontal: number;
        };
        'NativeBase.Icon': {
            color: any;
            fontSize: number | undefined;
        };
        '.active': {
            'NativeBase.Text': {
                color: any;
                fontWeight: string;
            };
            'NativeBase.Icon': {
                color: any;
            };
        };
    };
    'NativeBase.TabContainer': {
        elevation: number;
        height: number;
        flexDirection: string;
        shadowColor: string | undefined;
        shadowOffset: {
            width: number;
            height: number;
        } | undefined;
        shadowOpacity: number | undefined;
        shadowRadius: number | undefined;
        justifyContent: string;
        borderBottomWidth: any;
        borderColor: any;
    };
    'NativeBase.Switch': {
        marginVertical: number;
    };
    'NativeBase.Separator': {
        '.group': {
            height: number;
            paddingVertical: number;
            paddingTop: any;
            '.bordered': {
                height: number;
                paddingVertical: number;
                paddingTop: any;
            };
        };
        '.bordered': {
            '.noTopBorder': {
                borderTopWidth: number;
            };
            '.noBottomBorder': {
                borderBottomWidth: number;
            };
            height: number;
            paddingTop: any;
            paddingBottom: any;
            borderBottomWidth: any;
            borderTopWidth: any;
            borderColor: any;
        };
        'NativeBase.Text': {
            fontSize: number;
            color: string;
        };
        '.noTopBorder': {
            borderTopWidth: number;
        };
        '.noBottomBorder': {
            borderBottomWidth: number;
        };
        height: number;
        backgroundColor: string;
        flex: number;
        justifyContent: string;
        paddingLeft: any;
    };
    'NativeBase.SwipeRow': {
        'NativeBase.ListItem': {
            '.list': {
                backgroundColor: string;
            };
            marginLeft: number;
        };
        'NativeBase.Left': {
            flex: number;
            alignSelf: null;
            alignItems: null;
            'NativeBase.Button': {
                flex: number;
                alignItems: string;
                justifyContent: string;
                alignSelf: string;
                borderRadius: number;
            };
        };
        'NativeBase.Right': {
            flex: number;
            alignSelf: null;
            alignItems: null;
            'NativeBase.Button': {
                flex: number;
                alignItems: string;
                justifyContent: string;
                alignSelf: string;
                borderRadius: number;
            };
        };
        'NativeBase.Button': {
            flex: number;
            height: null;
            alignItems: string;
            justifyContent: string;
            alignSelf: string;
            borderRadius: number;
        };
    };
    'NativeBase.Thumbnail': {
        '.square': {
            borderRadius: number;
            '.small': {
                width: number;
                height: number;
                borderRadius: number;
            };
            '.large': {
                width: number;
                height: number;
                borderRadius: number;
            };
        };
        '.small': {
            width: number;
            height: number;
            borderRadius: number;
            '.square': {
                borderRadius: number;
            };
        };
        '.large': {
            width: number;
            height: number;
            borderRadius: number;
            '.square': {
                borderRadius: number;
            };
        };
        width: number;
        height: number;
        borderRadius: number;
    };
};
