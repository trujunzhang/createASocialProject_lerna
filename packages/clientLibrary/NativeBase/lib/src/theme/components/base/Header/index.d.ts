export declare const headerTheme: (variables: any) => {
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
