class InformalFileInterface:
    def load_data_source(self, path: str, filename: str) -> str:
        """load file for extract data"""
        pass

    def extract_text(self, full_file_name: str) -> dict:
        """extract data"""
        pass


class ReadFile(InformalFileInterface):
    def load_data_source(self, path: str, filename: str) -> str:
        return {path, filename}


class ReadEmail(InformalFileInterface):
    def load_data_source(self, path: str, filename: str) -> str:
        return path + "/" + filename


# file = ReadFile()
# result = file.load_data_source("/path", "leonardo.csv")
# print(result)

email = ReadEmail()
# result = email.load_data_source("/path", "leonardo.csv")
# print(result)

print(issubclass(ReadEmail, InformalFileInterface))
