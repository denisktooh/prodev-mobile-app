import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchGroup: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    backgroundColor: '#fff',
  },
  searchFormGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    paddingLeft: 20,
    paddingRight: 5,
    height: 60,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  searchControlGroup: {
    flex: 1,
  },
  searchFormText: {
    fontSize: 16,
    color: '#333',
  },
  searchControl: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  searchButton: {
    backgroundColor: '#34967C',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
    paddingVertical: 10,
  },
  filterContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    width: 70,
  },
  listingContainer: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  paginationContainer: {
    alignItems: 'center',
    marginVertical: 30,
  },
  showMoreButton: {
    backgroundColor: '#34967C',
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  showMoreButtonText: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '600',
  },
});

export { styles };