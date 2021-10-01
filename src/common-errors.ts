export const commonErrors = {
    EACCESS: {
        name: 'EACCESS',
        message: 'Access Error',
        status: 401,
        isOperational: true,
    },
    ELOGIN: {
        name: 'EACCESS',
        message: 'Login Failed',
        status: 401,
        isOperational: true,
    },
    ECREATE_LIMIT: {
        name: 'ECREATE_LIMIT',
        message: 'Can not create more records. Limit Error',
        status: 400,
        isOperational: true,
    },

    EFOUND_LIMIT: {
        name: 'EFOUND_LIMIT',
        message: 'Query returns too many records. Limit Error.',
        status: 400,
        isOperational: true,
    },

    ERECORD_NOT_FOUND: {
        name: 'ERECORD_NOT_FOUND',
        message: 'Record not found!',
        status: 400,
        isOperational: true,
    },

    EONLY_OWN_RECORD: {
        name: 'ONLY_OWN_RECORD',
        message: 'Only own records can be accessed.',
        status: 400,
        isOperational: true,
    },

    EACCESSWP: {
        name: 'EACCESSWP',
        message: 'Access Denied (Wrong Password?)',
        status: 400,
        isOperational: true,
    },

    EACCESS_SELF: {
        name: 'EACCESS_SELF',
        message: 'Access Denied (Self)',
        status: 400,
        isOperational: true,
    },

    EACCESS_LIMIT: {
        name: 'EACCESS_LIMIT',
        message: 'Access Denied (Limit Reached)',
        status: 400,
        isOperational: true,
    },

    EACCESS_READONLY: {
        name: 'EACCESS_READONLY',
        message: 'Access Denied (Readonly)',
        status: 400,
        isOperational: true,
    },

    EALREADY_SLAVE: {
        name: 'EALREADY_SLAVE',
        message: 'Already a slave key',
        status: 400,
        isOperational: true,
    },

    EKEY_HAS_DEV: {
        name: 'EKEY_HAS_DEV',
        message: 'Key which has registered devices can not be a slave-key.',
        status: 400,
        isOperational: true,
    },

    EKEY_IS_MASTER: {
        name: 'EKEY_IS_MASTER',
        message: 'This Key is a Master Key. Access Denied.',
        status: 400,
        isOperational: true,
    },

    ECERTIFICATE: {
        name: 'ECERTIFICATE',
        message: 'Check Your Certificate File',
        status: 400,
        isOperational: true,
    },

    EWRONG_FORMAT: {
        name: 'EWRONG_FORMAT',
        message: 'Format Error',
        status: 400,
        isOperational: true,
    },

    EVERIFY: {
        name: 'EVERIFY',
        message: 'Could not verify provided info.',
        status: 400,
        isOperational: true,
    },

    ECONFIG: {
        name: 'ECONFIG',
        message: 'Config Error',
        status: 400,
        isOperational: true,
    },

    EUNKNOWN_ERROR: {
        name: 'EUNKNOWN_ERROR',
        message: 'Unknown Error Occured',
        status: 400,
        isOperational: true,
    },

    EREMOTE_DISCONNECTED: {
        name: 'EREMOTE_DISCONNECTED',
        message: 'Remote Disconnected',
        status: 400,
        isOperational: true,
    },

    EREMOTE_STATE_ERROR: {
        name: 'EREMOTE_STATE_ERROR',
        message: 'Remote State Error',
        status: 400,
        isOperational: true,
    },

    EREMOTE_UNKNOWN_ERROR: {
        name: 'EREMOTE_UNKNOWN_ERROR',
        message: 'Remote Unknown Error Occured',
        status: 400,
        isOperational: true,
    },

    EREMOTE_NODE_NOT_ONLINE: {
        name: 'EREMOTE_NODE_NOT_ONLINE',
        message: 'Remote Not Online',
        status: 400,
        isOperational: true,
    },

    ESERVER: {
        name: 'ESERVER',
        message: 'Server Error!',
        status: 500,
        isOperational: true,
    },

    ESERVER1001: {
        name: 'ESERVER1001',
        message: 'Server Error #1001',
        status: 500,
        isOperational: true,
    },

    ESERVER1002: {
        name: 'ESERVER1002',
        message: 'Server Error #1002',
        status: 500,
        isOperational: true,
    },

    ESERVER1003: {
        name: 'ESERVER1003',
        message: 'Server Error #1003',
        status: 500,
        isOperational: true,
    },

    ESERVER1004: {
        name: 'ESERVER1004',
        message: 'Server Error #1004',
        status: 500,
        isOperational: true,
    },

    ESERVER1005: {
        name: 'ESERVER1005',
        message: 'Server Error #1005',
        status: 500,
        isOperational: true,
    },

    ESERVER1006: {
        name: 'ESERVER1006',
        message: 'Server Error #1006',
        status: 500,
        isOperational: true,
    },

    ESERVER1007: {
        name: 'ESERVER1007',
        message: 'Server Error #1007',
        status: 500,
        isOperational: true,
    },

    ESERVER1008: {
        name: 'ESERVER1008',
        message: 'Server Error #1008',
        status: 500,
        isOperational: true,
    },

    ESERVER1009: {
        name: 'ESERVER1009',
        message: 'Server Error #1009',
        status: 500,
        isOperational: true,
    },

    ESERVER1010: {
        name: 'ESERVER1010',
        message: 'Server Error #1010',
        status: 500,
        isOperational: true,
    },

    ESERVER1011: {
        name: 'ESERVER1011',
        message: 'Server Error #1011',
        status: 500,
        isOperational: true,
    },

    ESERVER1012: {
        name: 'ESERVER1012',
        message: 'Server Error #1012',
        status: 500,
        isOperational: true,
    },

    ESERVER1013: {
        name: 'ESERVER1013',
        message: 'Server Error #1013',
        status: 500,
        isOperational: true,
    },

    ESERVER1014: {
        name: 'ESERVER1014',
        message: 'Server Error #1014',
        status: 500,
        isOperational: true,
    },

    ESERVER1015: {
        name: 'ESERVER1015',
        message: 'Server Error #1015',
        status: 500,
        isOperational: true,
    },

    ESERVER1016: {
        name: 'ESERVER1016',
        message: 'Server Error #1016',
        status: 500,
        isOperational: true,
    },

    ESERVER1017: {
        name: 'ESERVER1017',
        message: 'Server Error #1017',
        status: 500,
        isOperational: true,
    },

    ESERVER1018: {
        name: 'ESERVER1018',
        message: 'Server Error #1018',
        status: 500,
        isOperational: true,
    },

    ESERVER1019: {
        name: 'ESERVER1019',
        message: 'Server Error #1019',
        status: 500,
        isOperational: true,
    },

    ESERVER1020: {
        name: 'ESERVER1020',
        message: 'Server Error #1020',
        status: 500,
        isOperational: true,
    },
    ESERVER1021: {
        name: 'ESERVER1021',
        message: 'Server Error #1021',
        status: 500,
        isOperational: true,
    },

    ESERVER1022: {
        name: 'ESERVER1022',
        message: 'Server Error #1022',
        status: 500,
        isOperational: true,
    },

    ESERVER1023: {
        name: 'ESERVER1023',
        message: 'Server Error #1023',
        status: 500,
        isOperational: true,
    },

    ESERVER1024: {
        name: 'ESERVER1024',
        message: 'Server Error #1024',
        status: 500,
        isOperational: true,
    },

    ESERVER1025: {
        name: 'ESERVER1025',
        message: 'Server Error #1025',
        status: 500,
        isOperational: true,
    },

    ESERVER1026: {
        name: 'ESERVER1026',
        message: 'Server Error #1026',
        status: 500,
        isOperational: true,
    },

    ESERVER1027: {
        name: 'ESERVER1027',
        message: 'Server Error #1027',
        status: 500,
        isOperational: true,
    },

    ESERVER1028: {
        name: 'ESERVER1028',
        message: 'Server Error #1028',
        status: 500,
        isOperational: true,
    },

    ESERVER1029: {
        name: 'ESERVER1029',
        message: 'Server Error #1029',
        status: 500,
        isOperational: true,
    },

    ESERVER1030: {
        name: 'ESERVER1030',
        message: 'Server Error #1030',
        status: 500,
        isOperational: true,
    },

    ESERVER1031: {
        name: 'ESERVER1031',
        message: 'Server Error #1031',
        status: 500,
        isOperational: true,
    },

    ESERVER1032: {
        name: 'ESERVER1032',
        message: 'Server Error #1032',
        status: 500,
        isOperational: true,
    },

    ESERVER1033: {
        name: 'ESERVER1033',
        message: 'Server Error #1033',
        status: 500,
        isOperational: true,
    },

    ESERVER1034: {
        name: 'ESERVER1034',
        message: 'Server Error #1034',
        status: 500,
        isOperational: true,
    },

    ESERVER1035: {
        name: 'ESERVER1035',
        message: 'Server Error #1035',
        status: 500,
        isOperational: true,
    },

    ESERVER1036: {
        name: 'ESERVER1036',
        message: 'Server Error #1036',
        status: 500,
        isOperational: true,
    },

    ESERVER1037: {
        name: 'ESERVER1037',
        message: 'Server Error #1037',
        status: 500,
        isOperational: true,
    },

    ESERVER1038: {
        name: 'ESERVER1038',
        message: 'Server Error #1038',
        status: 500,
        isOperational: true,
    },

    ESERVER1039: {
        name: 'ESERVER1039',
        message: 'Server Error #1039',
        status: 500,
        isOperational: true,
    },

    ESERVER1040: {
        name: 'ESERVER1040',
        message: 'Server Error #1040',
        status: 500,
        isOperational: true,
    },

    ESERVER1041: {
        name: 'ESERVER1041',
        message: 'Server Error #1041',
        status: 500,
        isOperational: true,
    },

    ESERVER1042: {
        name: 'ESERVER1042',
        message: 'Server Error #1042',
        status: 500,
        isOperational: true,
    },

    ESERVER1043: {
        name: 'ESERVER1043',
        message: 'Server Error #1043',
        status: 500,
        isOperational: true,
    },

    ESERVER1044: {
        name: 'ESERVER1044',
        message: 'Server Error #1044',
        status: 500,
        isOperational: true,
    },

    ESERVER1045: {
        name: 'ESERVER1045',
        message: 'Server Error #1045',
        status: 500,
        isOperational: true,
    },

    ESERVER1046: {
        name: 'ESERVER1046',
        message: 'Server Error #1046',
        status: 500,
        isOperational: true,
    },

    ESERVER1047: {
        name: 'ESERVER1047',
        message: 'Server Error #1047',
        status: 500,
        isOperational: true,
    },

    ESERVER1048: {
        name: 'ESERVER1048',
        message: 'Server Error #1048',
        status: 500,
        isOperational: true,
    },

    ESERVER1049: {
        name: 'ESERVER1049',
        message: 'Server Error #1049',
        status: 500,
        isOperational: true,
    },

    ESERVER1050: {
        name: 'ESERVER1050',
        message: 'Server Error #1050',
        status: 500,
        isOperational: true,
    },

    ESERVER1051: {
        name: 'ESERVER1051',
        message: 'Server Error #1051',
        status: 500,
        isOperational: true,
    },

    ESERVER1052: {
        name: 'ESERVER1052',
        message: 'Server Error #1052',
        status: 500,
        isOperational: true,
    },

    ESERVER1053: {
        name: 'ESERVER1053',
        message: 'Server Error #1053',
        status: 500,
        isOperational: true,
    },

    ESERVER1054: {
        name: 'ESERVER1054',
        message: 'Server Error #1054',
        status: 500,
        isOperational: true,
    },

    ESERVER1055: {
        name: 'ESERVER1055',
        message: 'Server Error #1055',
        status: 500,
        isOperational: true,
    },

    ESERVER1056: {
        name: 'ESERVER1056',
        message: 'Server Error #1056',
        status: 500,
        isOperational: true,
    },

    ESERVER1057: {
        name: 'ESERVER1057',
        message: 'Server Error #1057',
        status: 500,
        isOperational: true,
    },

    ESERVER1058: {
        name: 'ESERVER1058',
        message: 'Server Error #1058',
        status: 500,
        isOperational: true,
    },

    ESERVER1059: {
        name: 'ESERVER1059',
        message: 'Server Error #1059',
        status: 500,
        isOperational: true,
    },

    ESERVER1060: {
        name: 'ESERVER1060',
        message: 'Server Error #1060',
        status: 500,
        isOperational: true,
    },

    ESERVER1061: {
        name: 'ESERVER1061',
        message: 'Server Error #1061',
        status: 500,
        isOperational: true,
    },

    ESERVER1062: {
        name: 'ESERVER1062',
        message: 'Server Error #1062',
        status: 500,
        isOperational: true,
    },

    ESERVER1063: {
        name: 'ESERVER1063',
        message: 'Server Error #1063',
        status: 500,
        isOperational: true,
    },

    ESERVER1064: {
        name: 'ESERVER1064',
        message: 'Server Error #1064',
        status: 500,
        isOperational: true,
    },

    ESERVER1065: {
        name: 'ESERVER1065',
        message: 'Server Error #1065',
        status: 500,
        isOperational: true,
    },

    ESERVER1066: {
        name: 'ESERVER1066',
        message: 'Server Error #1066',
        status: 500,
        isOperational: true,
    },

    ESERVER1067: {
        name: 'ESERVER1067',
        message: 'Server Error #1067',
        status: 500,
        isOperational: true,
    },

    ESERVER1068: {
        name: 'ESERVER1068',
        message: 'Server Error #1068',
        status: 500,
        isOperational: true,
    },

    ESERVER1069: {
        name: 'ESERVER1069',
        message: 'Server Error #1069',
        status: 500,
        isOperational: true,
    },

    ESERVER1070: {
        name: 'ESERVER1070',
        message: 'Server Error #1070',
        status: 500,
        isOperational: true,
    },

    ESERVER1071: {
        name: 'ESERVER1071',
        message: 'Server Error #1071',
        status: 500,
        isOperational: true,
    },

    ESERVER1072: {
        name: 'ESERVER1072',
        message: 'Server Error #1072',
        status: 500,
        isOperational: true,
    },

    ESERVER1073: {
        name: 'ESERVER1073',
        message: 'Server Error #1073',
        status: 500,
        isOperational: true,
    },

    ESERVER1074: {
        name: 'ESERVER1074',
        message: 'Server Error #1074',
        status: 500,
        isOperational: true,
    },

    ESERVER1075: {
        name: 'ESERVER1075',
        message: 'Server Error #1075',
        status: 500,
        isOperational: true,
    },

    ESERVER1076: {
        name: 'ESERVER1076',
        message: 'Server Error #1076',
        status: 500,
        isOperational: true,
    },

    ESERVER1077: {
        name: 'ESERVER1077',
        message: 'Server Error #1077',
        status: 500,
        isOperational: true,
    },

    ESERVER1078: {
        name: 'ESERVER1078',
        message: 'Server Error #1078',
        status: 500,
        isOperational: true,
    },

    ESERVER1079: {
        name: 'ESERVER1079',
        message: 'Server Error #1079',
        status: 500,
        isOperational: true,
    },

    ESERVER1080: {
        name: 'ESERVER1080',
        message: 'Server Error #1080',
        status: 500,
        isOperational: true,
    },

    ESERVER1081: {
        name: 'ESERVER1081',
        message: 'Server Error #1081',
        status: 500,
        isOperational: true,
    },

    ESERVER1082: {
        name: 'ESERVER1082',
        message: 'Server Error #1082',
        status: 500,
        isOperational: true,
    },

    ESERVER1083: {
        name: 'ESERVER1083',
        message: 'Server Error #1083',
        status: 500,
        isOperational: true,
    },

    ESERVER1084: {
        name: 'ESERVER1084',
        message: 'Server Error #1084',
        status: 500,
        isOperational: true,
    },

    ESERVER1085: {
        name: 'ESERVER1085',
        message: 'Server Error #1085',
        status: 500,
        isOperational: true,
    },

    ESERVER1086: {
        name: 'ESERVER1086',
        message: 'Server Error #1086',
        status: 500,
        isOperational: true,
    },

    ESERVER1087: {
        name: 'ESERVER1087',
        message: 'Server Error #1087',
        status: 500,
        isOperational: true,
    },

    ESERVER1088: {
        name: 'ESERVER1088',
        message: 'Server Error #1088',
        status: 500,
        isOperational: true,
    },

    ESERVER1089: {
        name: 'ESERVER1089',
        message: 'Server Error #1089',
        status: 500,
        isOperational: true,
    },

    ESERVER1090: {
        name: 'ESERVER1090',
        message: 'Server Error #1090',
        status: 500,
        isOperational: true,
    },

    ESERVER1091: {
        name: 'ESERVER1091',
        message: 'Server Error #1091',
        status: 500,
        isOperational: true,
    },

    ESERVER1092: {
        name: 'ESERVER1092',
        message: 'Server Error #1092',
        status: 500,
        isOperational: true,
    },

    ESERVER1093: {
        name: 'ESERVER1093',
        message: 'Server Error #1093',
        status: 500,
        isOperational: true,
    },

    ESERVER1094: {
        name: 'ESERVER1094',
        message: 'Server Error #1094',
        status: 500,
        isOperational: true,
    },

    ESERVER1095: {
        name: 'ESERVER1095',
        message: 'Server Error #1095',
        status: 500,
        isOperational: true,
    },

    ESERVER1096: {
        name: 'ESERVER1096',
        message: 'Server Error #1096',
        status: 500,
        isOperational: true,
    },

    ESERVER1097: {
        name: 'ESERVER1097',
        message: 'Server Error #1097',
        status: 500,
        isOperational: true,
    },

    ESERVER1098: {
        name: 'ESERVER1098',
        message: 'Server Error #1098',
        status: 500,
        isOperational: true,
    },

    ESERVER1099: {
        name: 'ESERVER1099',
        message: 'Server Error #1099',
        status: 500,
        isOperational: true,
    },

    ESERVER1100: {
        name: 'ESERVER1100',
        message: 'Server Error #1100',
        status: 500,
        isOperational: true,
    },

    ESERVER1101: {
        name: 'ESERVER1101',
        message: 'Server Error #1101',
        status: 500,
        isOperational: true,
    },

    ESERVER1102: {
        name: 'ESERVER1102',
        message: 'Server Error #1102',
        status: 500,
        isOperational: true,
    },

    ESERVER1103: {
        name: 'ESERVER1103',
        message: 'Server Error #1103',
        status: 500,
        isOperational: true,
    },

    ESERVER1104: {
        name: 'ESERVER1104',
        message: 'Server Error #1104',
        status: 500,
        isOperational: true,
    },

    ESERVER1105: {
        name: 'ESERVER1105',
        message: 'Server Error #1105',
        status: 500,
        isOperational: true,
    },

    ESERVER1106: {
        name: 'ESERVER1106',
        message: 'Server Error #1106',
        status: 500,
        isOperational: true,
    },

    ESERVER1107: {
        name: 'ESERVER1107',
        message: 'Server Error #1107',
        status: 500,
        isOperational: true,
    },

    ESERVER1108: {
        name: 'ESERVER1108',
        message: 'Server Error #1108',
        status: 500,
        isOperational: true,
    },

    ESERVER1109: {
        name: 'ESERVER1109',
        message: 'Server Error #1109',
        status: 500,
        isOperational: true,
    },

    ESERVER1110: {
        name: 'ESERVER1110',
        message: 'Server Error #1110',
        status: 500,
        isOperational: true,
    },

    ESERVER1111: {
        name: 'ESERVER1111',
        message: 'Server Error #1111',
        status: 500,
        isOperational: true,
    },

    ESERVER1112: {
        name: 'ESERVER1112',
        message: 'Server Error #1112',
        status: 500,
        isOperational: true,
    },

    ESERVER1113: {
        name: 'ESERVER1113',
        message: 'Server Error #1113',
        status: 500,
        isOperational: true,
    },

    ESERVER1114: {
        name: 'ESERVER1114',
        message: 'Server Error #1114',
        status: 500,
        isOperational: true,
    },

    ESERVER1115: {
        name: 'ESERVER1115',
        message: 'Server Error #1115',
        status: 500,
        isOperational: true,
    },

    ESERVER1116: {
        name: 'ESERVER1116',
        message: 'Server Error #1116',
        status: 500,
        isOperational: true,
    },

    ESERVER1117: {
        name: 'ESERVER1117',
        message: 'Server Error #1117',
        status: 500,
        isOperational: true,
    },

    ESERVER1118: {
        name: 'ESERVER1118',
        message: 'Server Error #1118',
        status: 500,
        isOperational: true,
    },

    ESERVER1119: {
        name: 'ESERVER1119',
        message: 'Server Error #1119',
        status: 500,
        isOperational: true,
    },

    ESERVER1120: {
        name: 'ESERVER1120',
        message: 'Server Error #1120',
        status: 500,
        isOperational: true,
    },
    ESERVER1121: {
        name: 'ESERVER1121',
        message: 'Server Error #1121',
        status: 500,
        isOperational: true,
    },

    ESERVER1122: {
        name: 'ESERVER1122',
        message: 'Server Error #1122',
        status: 500,
        isOperational: true,
    },

    ESERVER1123: {
        name: 'ESERVER1123',
        message: 'Server Error #1123',
        status: 500,
        isOperational: true,
    },

    ESERVER1124: {
        name: 'ESERVER1124',
        message: 'Server Error #1124',
        status: 500,
        isOperational: true,
    },

    ESERVER1125: {
        name: 'ESERVER1125',
        message: 'Server Error #1125',
        status: 500,
        isOperational: true,
    },

    ESERVER1126: {
        name: 'ESERVER1126',
        message: 'Server Error #1126',
        status: 500,
        isOperational: true,
    },

    ESERVER1127: {
        name: 'ESERVER1127',
        message: 'Server Error #1127',
        status: 500,
        isOperational: true,
    },

    ESERVER1128: {
        name: 'ESERVER1128',
        message: 'Server Error #1128',
        status: 500,
        isOperational: true,
    },

    ESERVER1129: {
        name: 'ESERVER1129',
        message: 'Server Error #1129',
        status: 500,
        isOperational: true,
    },

    ESERVER1130: {
        name: 'ESERVER1130',
        message: 'Server Error #1130',
        status: 500,
        isOperational: true,
    },

    ESERVER1131: {
        name: 'ESERVER1131',
        message: 'Server Error #1131',
        status: 500,
        isOperational: true,
    },

    ESERVER1132: {
        name: 'ESERVER1132',
        message: 'Server Error #1132',
        status: 500,
        isOperational: true,
    },

    ESERVER1133: {
        name: 'ESERVER1133',
        message: 'Server Error #1133',
        status: 500,
        isOperational: true,
    },

    ESERVER1134: {
        name: 'ESERVER1134',
        message: 'Server Error #1134',
        status: 500,
        isOperational: true,
    },

    ESERVER1135: {
        name: 'ESERVER1135',
        message: 'Server Error #1135',
        status: 500,
        isOperational: true,
    },

    ESERVER1136: {
        name: 'ESERVER1136',
        message: 'Server Error #1136',
        status: 500,
        isOperational: true,
    },

    ESERVER1137: {
        name: 'ESERVER1137',
        message: 'Server Error #1137',
        status: 500,
        isOperational: true,
    },

    ESERVER1138: {
        name: 'ESERVER1138',
        message: 'Server Error #1138',
        status: 500,
        isOperational: true,
    },

    ESERVER1139: {
        name: 'ESERVER1139',
        message: 'Server Error #1139',
        status: 500,
        isOperational: true,
    },

    ESERVER1140: {
        name: 'ESERVER1140',
        message: 'Server Error #1140',
        status: 500,
        isOperational: true,
    },

    ESERVER1141: {
        name: 'ESERVER1141',
        message: 'Server Error #1141',
        status: 500,
        isOperational: true,
    },

    ESERVER1142: {
        name: 'ESERVER1142',
        message: 'Server Error #1142',
        status: 500,
        isOperational: true,
    },

    ESERVER1143: {
        name: 'ESERVER1143',
        message: 'Server Error #1143',
        status: 500,
        isOperational: true,
    },

    ESERVER1144: {
        name: 'ESERVER1144',
        message: 'Server Error #1144',
        status: 500,
        isOperational: true,
    },

    ESERVER1145: {
        name: 'ESERVER1145',
        message: 'Server Error #1145',
        status: 500,
        isOperational: true,
    },

    ESERVER1146: {
        name: 'ESERVER1146',
        message: 'Server Error #1146',
        status: 500,
        isOperational: true,
    },

    ESERVER1147: {
        name: 'ESERVER1147',
        message: 'Server Error #1147',
        status: 500,
        isOperational: true,
    },

    ESERVER1148: {
        name: 'ESERVER1148',
        message: 'Server Error #1148',
        status: 500,
        isOperational: true,
    },

    ESERVER1149: {
        name: 'ESERVER1149',
        message: 'Server Error #1149',
        status: 500,
        isOperational: true,
    },

    ESERVER1150: {
        name: 'ESERVER1150',
        message: 'Server Error #1150',
        status: 500,
        isOperational: true,
    },
};
