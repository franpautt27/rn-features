import { View, Text, SectionList } from "react-native";
import React from "react";
import { globalStyles } from "../theme/appTheme";
import HeaderTitle from "../components/HeaderTitle";
import { casas } from "../data/casas";

const SectionListScreen = () => {
  return (
    <View style={[globalStyles.globalMargin, { flex: 1 }]}>
      <SectionList
        ListHeaderComponent={<HeaderTitle title="Section List" />}
        ListFooterComponent={
          <HeaderTitle title={`Total de casas: ${casas.length}`} />
        }
        sections={casas}
        SectionSeparatorComponent={()=> <View style={{height: 2, backgroundColor: "grey"}} />}
        ItemSeparatorComponent={()=> <View style={{height: 2, backgroundColor: "grey"}} />}
        stickySectionHeadersEnabled
        keyExtractor={(item, index) => item + index}
        renderSectionHeader={({ section }) => (
          <View style={{ backgroundColor: "white" }}>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderItem={({ item, index }) => <Text>{item}</Text>}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
      />
    </View>
  );
};

export default SectionListScreen;
