import React from 'react';
import axios from 'axios';
import Search from './components/Search';
import Results from './components/Results';

interface ApiResponse {
  name: string;
  birth_year: string;
}

interface AppState {
  results: { name: string; description: string }[];
  error: string | null;
  loading: boolean;
}

class App extends React.Component<{}, AppState> {
  state: AppState = {
    results: [],
    error: null,
    loading: false,
  };

  componentDidMount() {
    const searchTerm = localStorage.getItem('searchTerm') || '';
    if (searchTerm) {
      this.fetchResults(searchTerm);
    }
  }

  fetchResults = async (searchTerm: string) => {
    if (!searchTerm.trim()) {
      this.setState({ results: [], error: 'Please enter a search term.' });
      return;
    }

    this.setState({ loading: true, error: null });

    const apiURL = `https://swapi.dev/api/people/?search=${searchTerm}`;

    try {
      const response = await axios.get<{ results: ApiResponse[] }>(apiURL);
      const results = response.data.results.map((item) => ({
        name: item.name,
        description: item.birth_year,
      }));
      this.setState({ results, error: null });
    } catch (error) {
      this.setState({
        error: error instanceof Error ? error.message : 'Failed to fetch results.',
        results: [],
      });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSearch = (searchTerm: string) => {
    this.fetchResults(searchTerm);
  };

  renderErrorButton = () => {
    const throwError = () => {
      throw new Error('Test Error');
    };

    return <button onClick={throwError}>Throw Error</button>;
  };

  render() {
    const { loading, results, error } = this.state;

    return (
      <>
        <Search
          onSearch={this.handleSearch}
          defaultSearchTerm={localStorage.getItem('searchTerm') || ''}
        />
        {loading && <div>Loading...</div>}
        <Results results={results} error={error} />
        {this.renderErrorButton()}
      </>
    );
  }
}

export default App;
